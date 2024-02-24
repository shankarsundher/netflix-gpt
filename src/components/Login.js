import React, { useRef, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BACKGROUND_URL } from '../utils/constants';



const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);

    const handleClickButton = () => {
        //form validation
        const validateData = checkValidData(email.current.value, password.current.value);
        setErrMsg(validateData);

        if (validateData == null) {
            //  Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode+  "-"  +errorMessage);
                });
        }
    }

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BACKGROUND_URL}
                    alt='backgroundimg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold p-2 ml-24 text-red-700'>Sign In</h1>
                <p className='text-red-600'>{errMsg}</p>
                <input
                    ref={email}
                    type='text'
                    placeholder='Email or phone number'
                    className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                {isSignIn && <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />}
                <button className='px-12 py-2 my-4 bg-red-700 text-white rounded-md w-full' onClick={handleClickButton}>
                    {isSignIn ? "Sign In" : "Send sign-in code"}
                </button>
                <p className='py-2 ml-36 text-white text-md'>
                    OR
                </p>
                <p onClick={toggleSignIn} className='flex justify-center py-2 my-4 bg-gray-600 text-white rounded-md w-full cursor-pointer'>
                    {isSignIn ? "Use a sign-in code" : "Use Password"}
                </p>
                <p className='text-white flex justify-center cursor-pointer'>
                    {isSignIn ? "Forget Password" : "Forget email or phone number"}
                </p>
                <p className='text-white flex justify-center cursor-pointer mt-4'>
                    <Link to="/sign-up">
                        New User? <strong><u>Sign Up</u></strong>.
                    </Link>
                </p>
            </form>

        </div>
    )
}

export default Login;
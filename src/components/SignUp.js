import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const SignUp = () => {
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleClickButton = () => {
        //form validation
        const validateData = checkValidData(email.current.value, password.current.value, name.current.value);
        setErrMsg(validateData);
        console.log(validateData);

        if (validateData == null) {
            //  Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value /*, photoURL: "https://example.com/jane-q-user/profile.jpg"*/
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        // ...
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        navigate("/browse");
                        // Profile updated!
                    }).catch((error) => {
                        // An error occurred
                        setErrMsg(error.message);
                    });
                    console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + "-" + errorMessage);
                    // ..
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='backgroundimg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
                <p className='flex justify-end text-white'>Existing User? <span className='bg-gray-400 rounded-md mb-5 px-2 cursor-pointer text-white'><Link to="/">Sign In</Link></span></p>
                <h1 className='text-3xl font-bold p-2 ml-24 text-red-700'>Sign Up</h1>
                <input ref={name} type='text' placeholder='Full Name' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                <input ref={email} type='text' placeholder='Email or phone number' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                <input ref={password} type='password' placeholder='Password' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                <p className='text-red-600'>{errMsg}</p>
                <button onClick={handleClickButton} className='px-12 py-2 my-4 bg-red-700 text-white rounded-md w-full '>
                    Sign-Up
                </button>
            </form>
        </div>
    )
}

export default SignUp
import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SIGNOUT_URL } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                // ...
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else{
                // User is signed out
                dispatch(removeUser());
               navigate('/');
              //  navigate("/sign-up");
            }
        });
        //unsubscribe when component unmount stage.
        return () => unsubscribe();
    }, []);

    return (
        <div className='absolute px-6 w-screen py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
            <img className='w-52' src={LOGO_URL}
                alt='logoimg' />
            {user && (<div className='flex py-2'>
                <img className='w-12 h-12'
                    alt='signOutIcon'
                    src={SIGNOUT_URL}
                />
                <button onClick={handleSignOut} className='text-red-600 font-bold'>
                    SignOut
                </button>
            </div>)}
        </div>
    )
}

export default Header
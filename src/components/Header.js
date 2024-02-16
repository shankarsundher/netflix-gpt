import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
           navigate("/error");
        });
    }
    return (
        <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
            <img className='w-52' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logoimg' />
        {user &&( <div className='flex py-2'>
            <img className='w-12 h-12'
                alt='signOutIcon'
                src='https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6'
            />
            <button onClick={handleSignOut} className='text-red-600 font-bold'>
                SignOut
            </button>
        </div>)}
        </div>
    )
}

export default Header
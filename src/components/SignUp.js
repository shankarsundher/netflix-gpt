import React from 'react'
import Header from './Header';

const SignUp = () => {
   
  return (
    <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='backgroundimg' />
            </div>
            <form className='absolute w-4/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold p-2 ml-24 text-red-700'>Sign Up</h1>
                <input type='text' placeholder='Full Name' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                <input type='text' placeholder='Email or phone number' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
               <input type='password' placeholder='Password' className='my-2 p-2 rounded-md w-full text-white bg-gray-800' />
                <button className='px-12 py-2 my-4 bg-red-700 text-white rounded-md w-full '>
                   Sign-Up
                </button>
            </form>
        </div>
    )
}

export default SignUp
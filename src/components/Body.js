import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './SignUp';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default Body
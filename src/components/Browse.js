import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import Login from './Login';

const Browse = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
     {user ? <Header/> : <Login/>}
    </div>
  )
}

export default Browse
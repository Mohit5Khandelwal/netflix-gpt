import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Body;

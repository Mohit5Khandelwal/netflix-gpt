
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';



const Body = () => {

  
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Body;

import { useDispatch } from 'react-redux'
import React from 'react'
import { MdLogout } from 'react-icons/md'
import { auth } from '../utils/firebase'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'


const LogOutDisplay = () => {

    const navigate = useNavigate();
    const user = useSelector( store => store.user );
    const dispatch = useDispatch();

    const signOutFun = () => {

        // sign out functionality
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success('Sucessfully Sign Out', {
                position: "top-center"
            });

            }).catch((error) => {
            // An error happened.
            toast.success('Error !!!', {
                position: "top-center"
            });
        });
    }

return (
    <div className='bg-black p-4 w-70 h-40 text-white absolute m-4 ml-[-50px] rounded-lg shadow-lg'>
        <p> {user?.displayName} </p>
        <div className='border border-b-2 mb-4' />
        <div className='flex hover:bg-slate-800 rounded-lg cursor-pointer' onClick={signOutFun}>
        <MdLogout className='w-10 h-10 text-red-600'/> <span className='m-1'> Log Out </span>
        </div>
        <Toaster />
    </div>
  )
}

export default LogOutDisplay
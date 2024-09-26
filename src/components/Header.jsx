import React, { useEffect, useState } from 'react'
import LogOutDisplay from './LogOutDisplay'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleIsGptClick } from '../utils/geminiSlice';

const Header = () => {

  const [show, setShow] = useState(false);
  const user = useSelector( store => store.user );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const popUpDisplay = () => {
    setShow(!show);
  }

  // Handle change the state 
  const handleGptChange = () => {

    console.log('GPT clicked');

    dispatch( toggleIsGptClick() );
    
  }

  // Restricton logic 
  useEffect( () => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {

            const { uid, email, displayName} = user;
            dispatch(addUser({ uid: uid , email: email, displayName: displayName}));
            
            console.log('--------- I am authenticated ----------')
            navigate('/browse');

            
        } else {
            console.log('--------- I am not authenticated ----------')
            // Remove the data from store 
            dispatch( removeUser());

            navigate('/');
        
        }
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();


}, [])


  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between'>

      
      <img 
        className='w-44'
        src={`${LOGO_URL}`} />
          <div className='flex p-2'>
            {/* language choose options Get these values from constant   */}
            <select className='w-30 h-10 px-4 py-2 m-4 rounded-lg bg-cyan-900 text-white'>
              { SUPPORTED_LANGUAGES.map( (lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
            </select>
            <button className='py-2 px-2 m-2 bg-purple-800 text-white rounded-lg hover:opacity-80' onClick={handleGptChange}>
              Search GPT
            </button>
            { user && <div>
              <img src='src\assets\Netflix Profile Icons.jpeg' onClick={popUpDisplay}  className='w-10 h-10 m-4 cursor-pointer' />
              { show && <LogOutDisplay /> }
            </div> }
          </div>



    </div>
  )
}

export default Header

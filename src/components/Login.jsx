import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { onAuthStateChanged, updateProfile } from "firebase/auth";

import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux';

const Login = () => {

  const [isUserLogin, setIsUserLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState([]);
  const [SignUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  // Empty form data 

  const handleSignUp = () => {
    setIsUserLogin( (prev) => !prev );
  }



  const dispatch = useDispatch();

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError([]);
    setSignUpError("");
    try
    {

      const schema = Yup.object().shape({
          email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
          password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required('Password is required')
      });

      await schema.validate(formData, { abortEarly: false });

      // No Error would be come just SignIn / SignUp User 
      if( !isUserLogin )
      {
        // SignUp Form 
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {

            // Signed up 
            // const user = userCredential.user; form this we cannot get current user 
            // Update the user details 
            updateProfile(auth.currentUser, {
              displayName: formData.name
            }).then(() => {

              const {uid, email, displayName} = auth.currentUser;

              dispatch(addUser({ uid: uid , email:email, displayName: displayName}));

            }).catch((error) => {

              setSignUpError(error.message);
              
            });

            // Toast Message 
            toast.success('Sucessfully SignUp !!', {
              position: "top-center"
            });
            
            navigate('/browse');

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setSignUpError(errorMessage);
          // ..
        });

      }
      else 
      {
        // SignIn Form
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const { uid, email, displayName} = user;
            dispatch(addUser({ uid: uid , email: email, displayName: displayName}));

              // Toast Message 
              toast.success('Sucessfully Log In', {
                position: "top-center"
              });

            navigate('/browse');





        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignUpError(errorMessage);
        });


      }

      
    }
    catch (e) {
      
      const newErrors = {};

      e?.inner?.forEach( (err) => {
        newErrors[err.path] = err.message;
      });

      setError(newErrors);
    }



  }

  return (
    <div>
      <Header />

      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg' />
      </div>

      {/* Login Form  */}
      <form className='absolute  p-16 w-4/12 my-36 right-0 left-0 mx-auto text-white bg-black bg-opacity-80'>
        <h1 className='font-bold text-3xl p-2'> { isUserLogin ? 'Sign In' : 'Sign Up'}  </h1>
        { SignUpError && <ErrorMessage message={SignUpError} /> }
        { !isUserLogin && <input name='name'  type='text' placeholder='Enter Your Name' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange}/> } 
        <input type='email'  name='email' placeholder='Email address' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange} />
        { error.email && <ErrorMessage message={error.email} /> }
        <input type='password' name='password' placeholder='Password' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange}/>
         { error.password && <ErrorMessage message={error.password} /> }
        <button className='p-4 my-4 bg-red-700 w-full' onClick={handleSubmit}> { isUserLogin ? 'Sign In' : 'Sign Up'} </button>
        <p className='p-4'> <span className='text-gray-400'> { isUserLogin ? 'New to NetFlix?' : 'Already register?'} </span> <span className='hover:border-b-2 cursor-pointer text-lg font-bold' onClick={handleSignUp}> { isUserLogin ? 'Sign Up Now' : 'Sign In Now'}   </span> </p>
        <Toaster />
      </form>
    </div>
  )
}

export default Login
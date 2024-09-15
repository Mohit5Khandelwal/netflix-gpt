import React, { useState } from 'react'
import Header from './Header'
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';

const Login = () => {

  const [isUserLogin, setIsUserLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState([]);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleSignUp = () => {
    setIsUserLogin( (prev) => !prev );
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError([]);

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
    }
    catch (e) {
      
      const newErrors = {};

      e?.inner?.forEach( (err) => {
        newErrors[err.path] = err.message;
      });

      setError(newErrors);
    }

    console.log(error);
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
        { !isUserLogin && <input name='name'  type='text' placeholder='Enter Your Name' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange}/> } 
        <input type='email' name='email' placeholder='Email address' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange} />
        { error.email && <ErrorMessage message={error.email} /> }
        <input type='password' name='password' placeholder='Password' className='p-4  w-full my-4 opacity-60% bg-inherit rounded-lg' onChange={handleInputChange}/>
         { error.message && <ErrorMessage message={error.password} /> }
        <button className='p-4 my-4 bg-red-700 w-full' onClick={handleSubmit}> { isUserLogin ? 'Sign In' : 'Sign Up'} </button>
        <p className='p-4'> <span className='text-gray-400'> { isUserLogin ? 'New to NetFlix?' : 'Already register?'} </span> <span className='hover:border-b-2 cursor-pointer text-lg font-bold' onClick={handleSignUp}> { isUserLogin ? 'Sign Up Now' : 'Sign In Now'}   </span> </p>
      </form>
    </div>
  )
}

export default Login
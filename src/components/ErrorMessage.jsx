import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className='text-red-500 pl-2'> {message} </p>
    </div>
  )
}

export default ErrorMessage

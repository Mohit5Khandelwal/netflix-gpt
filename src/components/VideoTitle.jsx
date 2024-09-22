import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const VideoTitle = ({ title, description}) => {
  return (
    <div className='w-screen aspect-video pt-[14rem] px-20 absolute bg-gradient-to-r from-black'>
        <h2 className='font-bold text-6xl text-white'> {title} </h2>
        <p className='py-6 text-lg w-1/4 text-white'> {description} </p>
        <div>
            <button className='bg-white px-6 py-4 text-black mr-3 rounded-lg shadow-lg hover:bg-opacity-80'> 
                <div className='flex justify-between'>
                    <FaPlay className='text-xl mr-2'/> 
                    <span className='text-md'> Play </span>
                </div>
                
            </button>
            <button className='bg-gray-600 px-6 py-4 text-white mr-3 rounded-lg shadow-lg hover:bg-opacity-80'> 
                <div className='flex justify-between'>
                    <IoMdInformationCircleOutline  className='text-xl mr-2'/> 
                    <span className='text-md'> More Info </span>
                </div>
                
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
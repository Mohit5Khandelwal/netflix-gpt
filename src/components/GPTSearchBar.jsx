import React from 'react'
import lang from '../utils/languageConstants'

const GPTSearchBar = () => {
    return (
        
        <div className='pt-[10%] flex justify-center'>
            <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg box-shadow" >
                <input type='text' className='p-4 m-4 col-span-9' placeholder={lang.hi.getSearchPlaceholder} />
                <button className='py-2 px-4 bg-red-700 text-white col-span-3 m-4 rounded-lg border-x-slate-600'> {lang.hi.search} </button>

            </form>
        
        </div>
    )
}

export default GPTSearchBar

import React from 'react'
import People from '../../assets/people.png'

const Expert = () => {
    return (
        <div className='flex flex-col py-10'>
            <div className='text-3xl lg:text-7xl font-bold text-center'>
                Get a free presentation from our
                in-house industry experts
            </div>
            <div className="flex mx-auto lg:mt-20 mt-10">
                <img className='' src={People} alt="" />
            </div>
            <div className="flex lg:w-1/6 lg:p-4 p-2 space-x-4 rounded-md mx-auto justify-center bg-[#FF576D] text-white font-semibold hover:shadow-md hover:shadow-red-400 hover:scale-105 duration-100">
                <button className=''>CONTACT US</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

export default Expert
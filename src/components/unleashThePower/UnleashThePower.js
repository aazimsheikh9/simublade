import React from 'react'
import Figures from '../../assets/figures.png'

const UnleashThePower = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:justify-between lg:pt-24 pt-12'>
            <div className='flex flex-col lg:w-1/2 w-full'>
                <div className="lg:text-7xl text-4xl text-[#341552] font-bold">Unleash the Power of <i className='text-[#FF576D]'>UI/UX</i> for your business</div>
                <div className="text-[#341552] lg:text-lg py-5 mt-4">Step into a world where pixels come alive. Experience the essence of your product, beyond aesthetics.</div>
                <div className="cursor-pointer flex my-10 mt-20 justify-between lg:ml-0 mx-auto bg-[#FF576D] lg:text-lg text-white lg:w-1/3 w-2/3 font-semibold rounded-md lg:p-4 p-3 hover:shadow-sm hover:shadow-[#FF576D] hover:scale-105 duration-100">
                    <button>GET IN TOUCH</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 my-auto animate-pulse ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className='pt-10 '>
                <img className='' src={Figures} alt="" />
            </div>
        </div>
    )
}

export default UnleashThePower
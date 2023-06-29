import React from 'react'
import Phone from '../../assets/phone.png'

const Powered = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-between lg:space-x-10 space-y-5 lg:space-y-0 mb-20'>
            <div className="bg-[#32A3AB] lg:w-3/5 flex justify-center lg:p-20 p-10 rounded-xl h-fit">
                <img className='lg:w-1/2' src={Phone} alt="" />
            </div>

            <div className="bg-[#FFF5F5] lg:w-2/3 p-10 rounded-xl h-fit">
                <div className="text-[#341552] text-lg font-bold mb-6 text-center lg:text-left">CARISTAS</div>
                <div className="text-[#341552] lg:text-5xl text-3xl font-bold mb-10 text-center lg:text-left">
                    Revolutionizes the car buying experience with AI powered matching
                </div>
                <div className="text-[#341552] text-lg text-center lg:text-left">Automated automobile solution for enthusiasts.</div>
                <div className="cursor-pointer text-[#341552] flex space-x-4 border-2 border-[#341552] p-3 rounded-lg mx-auto lg:mx-0 lg:w-1/3 w-3/5 lg:mt-56 mt-20 hover:bg-[#32A3AB] hover:border-none hover:text-white hover:scale-105 duration-100 ">
                    <button className=''>KNOW MORE</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Powered
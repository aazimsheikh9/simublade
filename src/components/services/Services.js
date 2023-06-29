import React from 'react'
import W from '../../assets/w.png'
import Signal from '../../assets/signal.png'
import Color from '../../assets/color.png'

const Services = () => {
    return (
        <div className='lg:pt-28 pt-10 pb-10 flex lg:flex-row flex-col lg:text-left text-center'>
            <div className="flex flex-col lg:w-2/3 lg:pl-20">
                <div className='lg:text-7xl text-5xl font-bold text-[#341552] w-2/3 pb-4 lg:mx-0 mx-auto'>
                    Our UI/UX Services
                </div>
                <div className="text-lg text-[#341552] w-2/3 my-4 mb-10 lg:mx-0 mx-auto">
                    Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression. Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression.
                </div>
                <div className="cursor-pointer text-[#E74C3C] flex font-semibold lg:w-1/2 hover:border-[#E74C3C] hover:border-2 duration-100 rounded-md lg:mx-0 mx-auto lg:m-0 mb-10 p-2">
                    <p className='mr-5'>Let’s design the future together!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>
            <div className='lg:w-2/3  overflow-x-auto'>
                <div className="flex p-2 space-x-4 w-max lg:w-screen">
                    <div className="bg-[#E0E0E0] rounded-lg p-8 w-1/6 lg:w-auto">
                        <div className="bg-[#FFFDFA] border-[#E0E0E0] border rounded-md w-16 h-16 mb-5 "></div>
                        <div className="text-2xl font-bold">UI Design</div>
                        <div className="text-sm mt-5 mb-10">Delve into the minds of your audience, gain insight, With UX research, your strategy takes flight. </div>
                        <div className="flex space-x-3">
                            <img className='w-8 h-8' src={W} alt="" />
                            <img className='w-8 h-8' src={Signal} alt="" />
                            <img className='w-8 h-8' src={Color} alt="" />
                        </div>
                    </div>
                    <div className="bg-[#E0E0E0] rounded-lg px-8 pt-8 w-1/6 lg:w-auto">
                        <div className="bg-[#FFFDFA] border-[#E0E0E0] border rounded-md w-16 h-16 mb-5 "></div>
                        <div className="text-2xl font-bold">UI Design</div>
                        <div className="text-sm mt-5 mb-10">Delve into the minds of your audience, gain insight, With UX research, your strategy takes flight. </div>
                        <div className="flex space-x-3">
                            <img className='w-8 h-8' src={W} alt="" />
                            <img className='w-8 h-8' src={Signal} alt="" />
                            <img className='w-8 h-8' src={Color} alt="" />
                        </div>
                    </div>
                    <div className="bg-[#E0E0E0] rounded-lg px-8 pt-8 lg:w-auto">
                        <div className="bg-[#FFFDFA] border-[#E0E0E0] border rounded-md w-16 h-16 mb-5 "></div>
                        <div className="text-2xl font-bold">UI Design</div>
                        <div className="text-sm mt-5 mb-10">Delve into the minds of your audience, gain insight, With UX research, your strategy takes flight. </div>
                        <div className="flex space-x-3">
                            <img className='w-8 h-8' src={W} alt="" />
                            <img className='w-8 h-8' src={Signal} alt="" />
                            <img className='w-8 h-8' src={Color} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
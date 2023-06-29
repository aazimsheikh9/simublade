import React from 'react'
import Twitter from '../../assets/twitter.png'
import Be from '../../assets/be.png'
import Ball from '../../assets/ball.png'
import LinkedIn from '../../assets/linkedin.png'

const ContactUs = () => {
    return (
        <div className='grid lg:grid-cols-2 py-4'>

            <div className="grid mb-16 lg:mb-0">
                <div className="lg:text-6xl text-4xl text-center lg:text-left font-bold text-[#341552] lg:mb-16 mb-10">Ready to turn your vision into reality?</div>
                <div className="text-lg text-[#341552] lg:mb-24 mb-16 text-center lg:text-left">Your business growth journey starts here.</div>
                <div className="">
                    <div className="text-[#341552] text-lg mb-6 text-center lg:text-left">You can also find us on:</div>
                    <div className="flex space-x-10 justify-center lg:justify-start">
                        <img src={Twitter} alt="" className="cursor-pointer hover:scale-110 duration-100" />
                        <img src={Be} alt="" className="cursor-pointer hover:scale-110 duration-100" />
                        <img src={Ball} alt="" className="cursor-pointer hover:scale-110 duration-100" />
                        <img src={LinkedIn} alt="" className="cursor-pointer hover:scale-110 duration-100" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full space-y-8">
                <input
                    type="text"
                    className="placeholder:text-lg placeholder:text-[#9A78BA] border-b-2 border-b-[#9A78BA] focus:outline-none bg-[#FFF5F5] focus:border-b-[#FF576D] p-4"
                    placeholder='Company Name' />

                <input
                    type="email"
                    className="placeholder:text-lg placeholder:text-[#9A78BA] border-b-2 border-b-[#9A78BA] focus:outline-none bg-[#FFF5F5] focus:border-b-[#FF576D] p-4"
                    placeholder='Company Email Address' />

                <input
                    type="number"
                    className="placeholder:text-lg placeholder:text-[#9A78BA] border-b-2 border-b-[#9A78BA] focus:outline-none bg-[#FFF5F5] focus:border-b-[#FF576D] p-4"
                    placeholder='Phone Number' />

                <input
                    type="text"
                    className="placeholder:text-lg placeholder:text-[#9A78BA] border-b-2 border-b-[#9A78BA] focus:outline-none bg-[#FFF5F5] focus:border-b-[#FF576D] p-4"
                    placeholder='Your Message' />

                <div className="flex space-x-5 bg-[#FF576D] text-white p-3 lg:w-1/3 w-2/3 rounded-lg hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-100">
                    <input type="button" value="SEND ENQUIRY" className='' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>

        </div>
    )
}

export default ContactUs
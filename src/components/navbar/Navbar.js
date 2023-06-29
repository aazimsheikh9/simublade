import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    return (
        <>
            <div className="p-4 w-full hidden md:block bg-[#fff] rounded-lg">
                <div className="flex justify-between">
                    <img onClick={() => navigate('/')} className='w-1/6 ml-10 cursor-pointer' src={Logo} alt="" />
                    <div className="flex justify-between mr-10 ">
                        <ul className='flex space-x-6 justify-center items-center text-lg font-semibold'>
                            <li className='cursor-pointer hover:border-b-4 text-[#341552] duration-200 border-[#341552]'>Services</li>
                            <li className='cursor-pointer hover:border-b-4 text-[#341552] duration-200 border-[#341552]'>Labs</li>
                            <li className='cursor-pointer hover:border-b-4 text-[#341552] duration-200 border-[#341552]'>Portfolio</li>
                            <li className='cursor-pointer hover:border-b-4 text-[#341552] duration-200 border-[#341552]'>About Us</li>
                            <li className='cursor-pointer hover:border-b-4 text-[#341552] duration-200 border-[#341552]'>Resources</li>
                        </ul>
                    </div>
                    <button  className='bg-[#8748C2] h-12 my-auto rounded-md text-white p-1 px-6 flex justify-center items-center text-base font-semibold mr-10 hover:scale-105 duration-200 hover:shadow-md hover:shadow-[#8748c257]'>Free Consultation</button>
                </div>
            </div>

            <div className="block md:hidden shadow-lg p-2 bg-white rounded-md">
                <div className='flex justify-between'>
                    <img className='w-1/3' src={Logo} alt="" />
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="bg-[#341552] text-white md:w-10 w-5 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> :
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                    </svg>
                </div>
                <div onClick={() => setOpen(true)} className={`${!open ? 'h-0' : 'h-48'} transition-all duration-300 overflow-hidden w-full`}>
                    <ul className="font-semibold mt-2 space-y-2  flex flex-col">
                        <li className="border-t-2 border-gray-500">Services</li>
                        <li className="">Labs</li>
                        <li className="">Portfolio</li>
                        <li className="">About Us</li>
                        <li className="">Resources</li>
                        <li className="">Free Consultaion</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
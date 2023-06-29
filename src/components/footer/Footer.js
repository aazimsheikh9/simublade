import React from 'react'
import LogoWhite from '../../assets/logoWhite.png'

const Footer = () => {
    return (
        <div className=''>

            <div className="pb-16 flex justify-center lg:justify-start">
                <img className='cursor-pointer' src={LogoWhite} alt="" />
            </div>

            <div className="grid lg:grid-cols-4 lg:gap-x-36">
                <div className="text-white">
                    <div className="">
                        <h3 className='text-xl font-semibold mb-4'>Services</h3>
                        <ul className="text-lg mb-10 lg:mb-0">
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Product Strategy</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">UI/UX</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Engineering</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Energing Technologies</li>
                        </ul>
                    </div>
                </div>

                <div className="text-white">
                    <div className="">
                        <h3 className='text-xl font-semibold mb-4'>Company</h3>
                        <ul className="text-lg mb-10 lg:mb-0">
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">About Us</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Our Work</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Terms and Conditions</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="text-white">
                    <div className="">
                        <h3 className='text-xl font-semibold mb-4'>Locations</h3>
                        <ul className="text-lg mb-10 lg:mb-0">
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Huston</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Austin</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">San Francisco</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">New Delhi</li>
                        </ul>
                    </div>
                </div>

                <div className="text-white">
                    <div className="">
                        <h3 className='text-xl font-semibold mb-4'>Connect</h3>
                        <ul className="text-lg mb-10 lg:mb-0">
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Contact Us</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">LinkedIn</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Facebook</li>
                            <li className="my-2 hover:underline hover:scale-110 duration-200 cursor-pointer">Clutch.io</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-white text-lg font-semibold pt-20">
                <p className="">Copyright 2023 Simublade</p>
            </div>

        </div>
    )
}

export default Footer
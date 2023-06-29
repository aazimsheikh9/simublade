import React, { useState, useEffect } from 'react';
import LaptopMobile from '../../assets/laptopmobile.png'
import { Pagination, Scrollbar, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BusinessSoar = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 29) {
            const interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 70);

            return () => clearInterval(interval);
        }
    }, [count]);

    return (
        <div className='flex flex-col'>
            <div className="flex lg:flex-row flex-col justify-between py-4 pt-10">
                <div className="text-[#341552] lg:text-6xl text-4xl font-bold lg:w-2/3 w-full">
                    Your business soar with our strategic UI/UX
                </div>
                <div className="text-[#341552] lg:text-lg text-base lg:w-2/3 w-full lg:mt-10 mt-5">
                    Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression. Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression.
                </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between lg:pt-10 pt-5'>
                <div className="lg:w-1/3 w-full px-5 mb-5 my-auto">
                    <Swiper
                        modules={[Pagination, Scrollbar]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className=''
                    >
                        <SwiperSlide>
                            < div className="bg-[#F29090] rounded-lg text-white p-5 lg:h-[400px] h-64" >
                                <p className="text-7xl font-bold">
                                    {count}+
                                </p>
                                <p className="text-lg mt-2">
                                    Product Designers
                                </p>
                            </div >
                        </SwiperSlide>
                        <SwiperSlide>
                            < div className="bg-[#F29090] rounded-lg text-white p-5 lg:h-[400px] h-64" >
                                <p className="text-7xl font-bold">
                                    {count}+
                                </p>
                                <p className="text-lg mt-2">
                                    Product Designers
                                </p>
                            </div >
                        </SwiperSlide>
                        <SwiperSlide>
                            < div className="bg-[#F29090] rounded-lg text-white p-5 lg:h-[400px] h-64" >
                                <p className="text-7xl font-bold">
                                    {count}+
                                </p>
                                <p className="text-lg mt-2">
                                    Product Designers
                                </p>
                            </div >
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="lg:pl-5">
                    <img src={LaptopMobile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BusinessSoar


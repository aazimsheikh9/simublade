import React from 'react'
import FullImage from '../../assets/fullImage.png'

const Process = () => {
    return (
        <div className=''>
            <div className="">
                <div className="flex lg:flex-row flex-col justify-between mt-5 pb-28">
                    <div className="text-[#341552] font-bold lg:text-7xl text-5xl">
                        Our UX design process in 6 stages
                    </div>
                    <div className="text-[#341552] text-lg lg:w-2/3 lg:mt-0 mt-5">
                        Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression. Discover our array of services, tailored to perfection, Each one designed to leave a lasting impression.
                    </div>
                </div>
                <div className='overflow-y-scroll' style={{ height: '400px' }}>
                    <div className="flex lg:flex-row flex-col lg:space-x-10">
                        <div className='bg-[#F5FEFF] p-10 h-fit rounded-2xl'>
                            <div className='text-[#8FB8BD] bg-white px-4 py-2 border-2 border-[#8FB8BD] rounded-md lg:w-1/6 text-center font-semibold'>Stage 1</div>
                            <div className='text-[#341552] text-4xl lg:text-left text-center font-bold lg:w-3/4 pt-5 pb-10'>Understand the problem statement</div>
                            <div className='text-[#341552] lg:text-left text-center lg:w-3/4'>As the old saying goes: If you have four hours to chop down a tree, spend the first three hours sharpening your axe.
                                <br />
                                <br />
                                The same goes for design. Before you get started with any project, you need to get the basics down first. That means understanding two crucial elements:</div>
                        </div>
                        <div className='flex mt-10 lg:mb-0 mb-10'>
                            <img className='' src={FullImage} alt="" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:space-x-10">
                        <div className='bg-[#F5FEFF] p-10 h-fit rounded-2xl'>
                            <div className='text-[#8FB8BD] bg-white px-4 py-2 border-2 border-[#8FB8BD] rounded-md lg:w-1/6 text-center font-semibold'>Stage 2</div>
                            <div className='text-[#341552] text-4xl lg:text-left text-center font-bold lg:w-3/4 pt-5 pb-10'>Understand the problem statement</div>
                            <div className='text-[#341552] lg:text-left text-center lg:w-3/4'>As the old saying goes: If you have four hours to chop down a tree, spend the first three hours sharpening your axe.
                                <br />
                                <br />
                                The same goes for design. Before you get started with any project, you need to get the basics down first. That means understanding two crucial elements:</div>
                        </div>
                        <div className='flex mt-10 lg:mb-0 mb-10'>
                            <img className='' src={FullImage} alt="" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:space-x-10">
                        <div className='bg-[#F5FEFF] p-10 h-fit rounded-2xl'>
                            <div className='text-[#8FB8BD] bg-white px-4 py-2 border-2 border-[#8FB8BD] rounded-md lg:w-1/6 text-center font-semibold'>Stage 3</div>
                            <div className='text-[#341552] text-4xl lg:text-left text-center font-bold lg:w-3/4 pt-5 pb-10'>Understand the problem statement</div>
                            <div className='text-[#341552] lg:text-left text-center lg:w-3/4'>As the old saying goes: If you have four hours to chop down a tree, spend the first three hours sharpening your axe.
                                <br />
                                <br />
                                The same goes for design. Before you get started with any project, you need to get the basics down first. That means understanding two crucial elements:</div>
                        </div>
                        <div className='flex mt-10 lg:mb-0 mb-10'>
                            <img className='' src={FullImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
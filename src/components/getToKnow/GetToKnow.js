import React, { useState } from 'react';

const GetToKnow = () => {
    const [isExpanded, setIsExpanded] = useState([true, false, false, false]);

    const handleToggle = (index) => {
        setIsExpanded((prevExpanded) => {
            const updatedExpanded = [...prevExpanded];
            updatedExpanded[index] = !updatedExpanded[index];
            return updatedExpanded;
        });
    };

    return (
        <div className="flex flex-col ">
            <div className='lg:text-6xl text-5xl font-bold lg:w-3/5 mb-20'>Get to know more about our UI/UX services</div>
            <div className="grid grid-cols-1 gap-4">
                {isExpanded.map((expanded, index) => (
                    <div
                        key={index}
                        className={`relative rounded-lg  p-4 ${expanded ? 'lg:h-40 h-64' : 'lg:h-12 h-28'
                            } transition-height duration-300 overflow-hidden`}
                    >
                        <p className="font-bold text-[#341552] lg:w-full w-4/5 text-lg">How can I book a free consultation with Simublade, and what can I expect?</p>
                        <button
                            className="absolute lg:top-0 top-3 right-0 lg:right-96 m-2 bg-white rounded-full p-2 transition-transform duration-300 transform-gpu"
                            onClick={() => handleToggle(index)}
                        >
                            {expanded ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 12H4"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            )}
                        </button>
                        {expanded && (
                            <p className="mt-6 text-xl lg:w-2/3">
                                You can fill out the Contact Form to schedule a Free Call OR just simply drop us an
                                Email to <i className="text-[#E74C3C]">hello@simublade.com</i>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetToKnow;

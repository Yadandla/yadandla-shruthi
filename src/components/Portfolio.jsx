import React from 'react'

const Portfolio = () => {

    return (
        <div className='first-div h-full'>
            <h1>Portfolio</h1>
            <div className='space'>

                {/* Professional projects starts */}
                <h2 className="border-b-2 border-[#f9c22e29] text-xl font-medium p-1 mb-5 text-white rounded-lg w-fit">Professional Projects</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8' id="prof">

                    {/* Project - 1 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/pidata.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>PiDatacenters</h3>
                                <div>
                                    <a href="https://pidatacenters.com/" target='_blank' className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 1 ends */}

                    {/* Project - 2 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/picloud.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Pi Cloud</h3>
                                <div>
                                    <a href="https://picloud.ai/" target='_blank' className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 2 ends */}

                </div>
            </div>
            {/* Professional projects ends */}


            {/* Personal projects starts */}
            <div className='py-5'>
                <h2 className="border-b-2 border-[#f9c22e29] text-xl font-medium p-1 mb-5 text-white rounded-lg w-fit">Personal Projects</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8' id="personal">

                    {/* Project - 3 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/note-cards.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Save Notes</h3>
                                <div>
                                    <a href="https://save-notes-neon.vercel.app/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 3 ends */}

                    {/* Project - 4 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/leetcode.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Leetcode Stats</h3>
                                <div>
                                    <a href="https://leetcode-stats-card.vercel.app/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 4 ends */}

                    {/* Project - 5 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/sparkle.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Sparkle Salon</h3>
                                <div>
                                    <a href="https://yadandla.github.io/sparklesalon/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 5 ends */}

                    {/* Project - 6 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/trendsu.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Ecommerce</h3>
                                <div>
                                    <a href="https://yadandla.github.io/shopping-site/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 6 ends */}

                    {/* Project - 7 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/calculator.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>Calculator</h3>
                                <div>
                                    <a href="https://yadandla.github.io/simple-calculator/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 7 ends */}

                    {/* Project - 8 starts */}
                    <div className='relative group rounded-lg drop-shadow-2xl hover:drop-shadow-3xl'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img className='lg:w-96 lg:h-40 md:w-full md:h-44 scale-100 group-hover:scale-110 transition-all duration-700' src="/images/todo-list.png" alt="profile" />
                            <div className='bg-[#000000db] absolute left-0 top-0 overflow-hidden rounded-lg w-full h-0 invisible group-hover:visible transition-all duration-700 group-hover:h-full z-[11] flex justify-center flex-col items-center gap-3 px-3'>
                                <h3 className='text-white text-2xl'>ToDo List</h3>
                                <div>
                                    {/* <button className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>Description</button> */}
                                    <a href="https://yadandla.github.io/todo-list/" target="_blank" className='bg-text1 text-black hover:bg-black hover:text-white py-1 px-4 font-bold rounded-lg border-none outline-none cursor-pointer'>view</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project - 8 ends */}

                </div>
            </div>
            {/* Personal projects ends */}

        </div>
    )
}


export default Portfolio

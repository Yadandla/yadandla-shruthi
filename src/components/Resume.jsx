import React from 'react'
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

const Resume = () => {

    const handleResumeFile = () => {
        window.open("/pdfs/yadandla_shruthi_resume.pdf", "_blank");
    }


    return (
        <div className='first-div'>
            <h1>Resume</h1>
            <div>
                <div className='space'>
                    {/* Education Background */}
                    <div className='flex justify-start items-center gap-2 pb-6'>
                        <span><lord-icon
                            src="https://cdn.lordicon.com/omiqopzf.json"
                            trigger="loop"
                            state="morph-book"
                            colors="primary:#ffffff"
                            delay="1500"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></span>
                        <h2 className='text-white text-2xl'>Education</h2>
                    </div>

                    <div className='border-l-2 border-gray-500 relative after:absolute after:content-["_"] after:top-0 after:-left-1.5 after:w-2.5 after:h-2.5 after:bg-text1 after:rounded-full p-5 pt-0 lg:pl-9 md:pl-10 max-sm:pl-9'>
                        <h3 className='text-white text-lg'>Government Degree College, Autonomous</h3>
                        <p className='text-white'>2019 - 2022</p>
                        <p className='text-white'>Bachelor of Science - MSCs [Mathematics, Statistics and Computer Science]</p>
                    </div>

                    <div className='border-l-2 border-gray-500 relative after:absolute after:content-["_"] after:top-0 after:-left-1.5 after:w-2.5 after:h-2.5 after:bg-text1 after:rounded-full p-5 pt-0 lg:pl-9 md:pl-10 max-sm:pl-9'>
                        <h3 className='text-white text-lg'>Gurukrupa Junior College</h3>
                        <p className='text-white'>2017 - 2019</p>
                        <p className='text-white'>MPC - Mathematics, Physics and Chemistry</p>
                    </div>

                    <div className='border-l-2 border-gray-500 relative after:absolute after:content-["_"] after:top-0 after:-left-1.5 after:w-2.5 after:h-2.5 after:bg-text1 after:rounded-full p-5 pt-0 lg:pl-9 md:pl-10 max-sm:pl-9 pb-0'>
                        <h3 className='text-white text-lg'>Orange Grammar School</h3>
                        <p className='text-white'>2016 - 2017</p>
                    </div>
                </div>

                {/* Experience Background */}
                <div className='space'>
                    <div className='flex justify-start items-center gap-2 pb-6'>
                        <span><lord-icon
                            src="https://cdn.lordicon.com/whrxobsb.json"
                            trigger="loop"
                            state="morph-analytics-2"
                            colors="primary:#ffffff"
                            delay="1500"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></span>
                        <h2 className='text-white text-2xl'>Experience</h2>
                    </div>

                    <div className='border-l-2 border-gray-500 relative after:absolute after:content-["_"] after:top-0 after:-left-1.5 after:w-2.5 after:h-2.5 after:bg-text1 after:rounded-full p-5 pt-0 lg:pl-9 md:pl-10 max-sm:pl-9 pb-0'>
                        <h3 className='text-white text-lg'>Hi-Techsters IT Services Pvt Ltd.</h3>
                        <p className='text-white'>2023-2024</p>
                        <p className='text-white'>Role: Web Developer</p>
                        <div>
                            <ul className='text-white'>
                                <li className='py-1 relative before:absolute before:content-["_"] lg:before:w-8.9 md:before:w-7.5 max-sm:before:w-6.5 before:h-[1px] before:bg-text1 before:top-4 lg:before:-left-9 md:before:-left-10 max-sm:before:-left-9'>Developed responsive and user-friendly websites.</li>

                                <li className='py-1 relative before:absolute before:content-["_"] lg:before:w-8.9 md:before:w-7.5 max-sm:before:w-6.5 before:h-[1px] before:bg-text1 before:top-4 lg:before:-left-9 md:before:-left-10 max-sm:before:-left-9'>Ensuring seamless integration of visuals and functionality by collaborating with backend developers and designers. </li>

                                <li className='py-1 relative before:absolute before:content-["_"] lg:before:w-8.9 md:before:w-7.5 max-sm:before:w-6.5 before:h-[1px] before:bg-text1 before:top-4 lg:before:-left-9 md:before:-left-10 max-sm:before:-left-9'>Updated website content and features as per client requirements.</li>

                                <li className='py-1 relative before:absolute before:content-["_"] lg:before:w-8.9 md:before:w-7.5 max-sm:before:w-6.5 before:h-[1px] before:bg-text1 before:top-4 lg:before:-left-9 md:before:-left-10 max-sm:before:-left-9'>Monitored website performance</li>

                                <li className='py-1 relative before:absolute before:content-["_"] lg:before:w-8.9 md:before:w-7.5 max-sm:before:w-6.5 before:h-[1px] before:bg-text1 before:top-4 lg:before:-left-9 md:before:-left-10 max-sm:before:-left-9'>Attended client meetings to provide updates and gather feedback.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className='space'>
                    <div className='flex justify-start items-center gap-2 pb-6'>
                        <span className='text-white text-2xl'><lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger="loop"
                            state="hover-ternd-flat-3"
                            colors="primary:#ffffff"
                            delay="1500"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon></span>
                        <h2 className='text-white text-2xl'>My Skills</h2>
                    </div>
                    <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 p-2 gap-2'>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2  hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><FaHtml5 /></span>
                            <h3 className='text-xl'>HTML</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><IoLogoCss3 /></span>
                            <h3 className='text-xl'>CSS</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><IoLogoJavascript /></span>
                            <h3 className='text-xl'>JavaScript</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><RiReactjsLine /></span>
                            <h3 className='text-xl'>React Js</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><SiTailwindcss /></span>
                            <h3 className='text-xl'>Tailwind CSS</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><FaBootstrap /></span>
                            <h3 className='text-xl'>Bootstrap</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><DiJqueryLogo /></span>
                            <h3 className='text-xl'>jQuery</h3>
                        </div>
                        <div className='text-white flex justify-start items-center gap-2 w-52 h-10 px-5 py-7 border-[1px] border-[#f9c22e42] m-2 hover:border-text1 active:border-text1 hover:shadow-sm active:shadow-sm shadow-text1'>
                            <span className='text-4xl'><FaGitAlt /></span>
                            <h3 className='text-xl'>Git</h3>
                        </div>
                    </div>
                </div>

                {/* Resume and CV Files */}
                <div className='flex max-sm:flex-col gap-4'>
                    <button className='bg-text1 text-black font-bold text-xl border-2 border-white px-4 py-2 cursor-pointer w-64 rounded-sm hover:bg-black hover:text-text1' onClick={handleResumeFile}>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Resume

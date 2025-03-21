import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const SideProfile = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <div className='bg-black p-6 max-sm:p-0 md:p-0 lg:p-6 fixed top-0 left-0 lg:h-full lg:w-[25%] overflow-auto md:overflow-hidden  max-sm:overflow-hidden md:w-full md:z-[3] md:border-b-2 md:border-[#f9c22e24] max-sm:w-full max-sm:border-b-2 max-sm:border-[#f9c22e24] max-sm:block max-sm:z-[2]'>

            {/* cursor trail starts */}
            <div className='text-right lg:hidden md:block max-sm:block'>
                <button className='text-text1 text-3xl p-3 max-sm:p-1 max-sm:text-2xl' onClick={() => setSideBarOpen(!sideBarOpen)}>{sideBarOpen ? <FaXmark /> : <IoMdContact />}</button>
            </div>
            {/* cursor trail ends */}

            {/* profile info starts */}
            <div className={`lg:block md:flex md:justify-evenly ${sideBarOpen ? "md:h-96 max-sm:h-screen max-sm:p-1 max-sm:pt-0 max-sm:overflow-scroll" : "md:h-0 max-sm:h-0"} transition-all duration-700`}>
                <div className='flex flex-col'>
                    <div className='pt-4 pb-3 flex justify-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="profile" className='rounded-3xl lg:w-60 lg:h-60 md:w-72 md:h-72 max-sm:w-64 max-sm:h-64' />
                        {/* <img src="/images/profile-pic.jpg" alt="profile" className='rounded-3xl w-60 h-60' /> */}
                    </div>

                    <div className='pt-2 pb-2 text-white text-center'>
                        <h2 className='font-bold'>Yadandla Shruthi</h2>
                        <p className='relative anim font-bold'>Front End Developer</p>
                    </div>

                    {/* social media links starts */}
                    <div className='flex justify-center pt-3 pb-6 max-sm:pb-3 lg:visible md:invisible'>
                        <ul className='text-white flex gap-6'>
                            <li><a href='https://www.linkedin.com/in/yadandla-shruthi-72aaa724b/' target='_blank'><img src="/images/linkedin.png" className='w-5 h-5' /></a></li>

                            <li><a href='https://wa.me/919000263698' target='_blank'><img src="/images/whatsapp.png" className='w-5 h-5' /></a></li>

                            <li><a href='https://www.instagram.com/yadandlashruthi/' target='_blank'><img src="/images/instagram.png" className='w-5 h-5' /></a></li>

                            <li><a href='https://github.com/Yadandla' target='_blank'><BsGithub className='w-5 h-5' /></a></li>
                        </ul>
                    </div>
                </div>
                {/* social media links ends */}

                <hr className='text-[#f9c22e29]' />
                <div className='prof-info pt-5 max-sm:pt-2 max-sm:pl-5'>
                    <div className='flex justify-start items-start'>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/vpbspaec.json"
                                trigger="loop"
                                stroke="bold"
                                colors="primary:#f9c22e,secondary:#f9c22e"
                                style={{ width: "30px", height: "30px" }}>
                            </lord-icon>
                        </div>
                        <div>
                            <h2>Email</h2>
                            <p>yadandlashruthi97@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <lord-icon src="https://cdn.lordicon.com/tftaqjwp.json"
                                trigger="loop"
                                colors="primary:#f9c22e,secondary:#f9c22e"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <p>+91 9000263698</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/onmwuuox.json"
                                trigger="loop"
                                stroke="bold"
                                colors="primary:#f9c22e,secondary:#f9c22e"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>
                        </div>
                        <div>
                            <h2>Location</h2>
                            <p>Siddipet, Telangana, India</p>
                        </div>
                    </div>

                    {/* displaying in mobile & tablet, laptop or desktop - hidden */}
                    <div className='flex justify-start py-6 pl-8 lg:hidden md:block max-sm:hidden'>
                        <ul className='text-white flex gap-6'>
                            <li><a href='https://www.linkedin.com/in/yadandla-shruthi-72aaa724b/' target='_blank'><img src="/images/linkedin.png" className='w-5 h-5' /></a></li>
                            <li><a href='https://wa.me/919000263698' target='_blank'><img src="/images/whatsapp.png" className='w-5 h-5' /></a></li>
                            <li><a href='https://www.instagram.com/yadandlashruthi/' target='_blank'><img src="/images/instagram.png" className='w-5 h-5' /></a></li>
                            <li><a href='https://github.com/Yadandla' target='_blank'><BsGithub className='w-5 h-5' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* profile info ends */}
        </div>
    )
}

export default SideProfile

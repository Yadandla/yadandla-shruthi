import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {

    // const [submitBtn, setSubmitBtn] = useState("Send Message");

    // const handleBtn = () => {
    //     document.querySelector('form').checkValidity() && setSubmitBtn("Sending...");
    // }

    return (
        <div className='first-div'>
            <h1>Contact Me</h1>
            <div className='space'>
                <p>Get in touch! I’d love to hear from you. Whether you have questions about my work, are interested in collaborations, or want to discuss potential hiring opportunities within your company, feel free to reach out using the form below. Let’s connect!</p>

                {/* Form starts */}
                <div className='lg:p-5 md:p-5 max-sm:3 m-5 rounded-lg hover:shadow-sm shadow-[#ffffff29]'>
                    <form action="https://formsubmit.co/yadandlashruthi97@gmail.com" method='POST'>
                        <h2 className='py-4 text-2xl font-bold text-white'>Let's make something awesome together!</h2>
                        <input type="hidden" name="_subject" value="New submission from Portfolio" />
                        <input type="hidden" name="_captcha" value="true" />
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <input type="hidden" name="_next" value="https://yadandla-shruthi.vercel.app/thankyou" />
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1'>
                            <div className='flex justify-start items-center gap-3 m-3 border-b-2 border-text1 p-2 rounded-lg'>
                                <span className='text-white'><RiContactsFill /></span>
                                <input className='w-full border-l-2 border-text1 pl-2 outline-none text-white' type="text" name="name" placeholder='Your Name' required />
                            </div>
                            <div className='flex justify-start items-center gap-3 m-3 border-b-2 border-text1 p-2 rounded-lg'>
                                <span className='text-white'><MdMarkEmailUnread /></span>
                                <input className='w-full border-l-2 border-text1 pl-2 outline-none text-white' type="email" name="email" placeholder='Email Address' required />
                            </div>
                            <div className='flex justify-start items-center gap-3 m-3 border-b-2 border-text1 p-2 rounded-lg'>
                                <span className='text-white'><FaPhoneVolume /></span>
                                <input className='w-full border-l-2 border-text1 pl-2 outline-none text-white' type="tel" name="phone" placeholder='Phone Number' required />
                            </div>
                        </div>
                        <div className='m-3 border-2 border-text1 p-2 rounded-lg'>
                            <textarea className='w-full outline-none text-white' rows="5" name="message" placeholder='A Few Words...'></textarea>
                        </div>
                        <div>
                            <input type="hidden" name="_captcha" value="false" />
                        </div>

                        <div className='m-3 p-2'>
                            <button className='relative border-2 border-white outline-none py-2 px-5 rounded-sm text-white flex justify-center items-center gap-2 z-[1] before:transition-all before:duration-700 before:absolute before:content-["_"] before:top-0 before:left-0 before:w-0 before:h-full before:bg-text1 before:-z-[1] hover:before:w-full w-52 cursor-pointer before:rounded font-bold'>Send Message <span><FaLocationArrow /></span></button>
                        </div>
                    </form>
                </div>
                {/* Form ends */}
            </div>
        </div>
    )
}

export default Contact

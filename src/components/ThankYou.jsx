import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div className='first-div flex justify-center items-center flex-col gap-5 h-screen'>
            <p className='text-text1 font-bold text-4xl'>Thank You for your message</p>
            <Link to="/contact" className='bg-white text-black font-semibold px-6 py-1 rounded-lg'>Go Back</Link>
        </div>
    )
}

export default ThankYou

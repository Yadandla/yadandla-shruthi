// import React from 'react'
import React, { useEffect } from 'react'
import SideProfile from './SideProfile'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ScrollTop from './ScrollTop'

const Applayout = () => {

    // Prevent from side effects
    useEffect(() => {

        const inner = document.getElementById("inner");

        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // console.log('Mouse moved:', mouseX, mouseY); 

            inner.animate({
                left: `${mouseX}px`,
                top: `${mouseY}px`
            }, {
                duration: 700, fill: "forwards"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div className='layout'>
            {/* Applying smooth scroll behaviour */}
            <ScrollTop />

            {/* All compnents */}
            <div className='lg:flex justify-start items-start'>
                <div className='lg:w-[25%]'>
                    <SideProfile />
                </div>

                {/* Outlet - a placeholder in your layout where the matched child route components will be rendered [like - home, about pages etc...] */}
                <div className='lg:w-[70%] lg:relative md:absolute'>
                    <Outlet />
                </div>

                <div className='lg:w-[5%]'>
                    <Header />
                </div>

                {/* Scroll trail */}
                <div id="inner" className='w-2 h-2 rounded-full bg-text1 fixed top-0 left-0 -translate-x-[50%] -translate-y-[50%] pointer-events-none lg:block md:hidden max-sm:hidden'></div>
            </div>
        </div>
    )
}

export default Applayout

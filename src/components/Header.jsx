import { NavLink } from 'react-router-dom'
import { IoNewspaper } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const Header = () => {

    return (
        <div className='bg-black p-2 fixed lg:top-0 lg:right-0 lg:w-[5%] lg:h-full lg:overflow-auto md:w-full max-sm:w-full md:-bottom-1 max-sm:-bottom-1 md:h-20 lg:border-l-2 lg:border-[#f9c22e24] md:border-t-2 md:border-[#f9c22e24] max-sm:h-16 max-sm:border-t-2 max-sm:border-[#f9c22e24] max-sm:px-1 z-[2] lg:z-0 md:z-[11] max-sm:z-[11]'>

            {/* Navbar's Part starts */}
            <ul className='flex lg:justify-evenly md:justify-evenly max-sm:justify-around lg:items-center md:items-center max-sm:items-end lg:flex-col text-white h-full nav-links relative md:flex-row'>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? "nav active" : "nav-item"}>
                        <span className='icon'><RiContactsFill /></span>
                        <span className='text'>About</span>
                    </NavLink>
                </li>

                <li><NavLink to='/resume' className={({ isActive }) => isActive ? "nav active" : "nav-item"}>
                    <span className='icon'><IoNewspaper /></span>
                    <span className='text'>Resume</span>
                </NavLink>
                </li>

                <li><NavLink to='/portfolio' className={({ isActive }) => isActive ? "nav active" : "nav-item"}>
                    <span className='icon'><GrProjects /></span>
                    <span className='text'>Portfolio</span>
                </NavLink>
                </li>

                <li><NavLink to='/contact' className={({ isActive }) => isActive ? "nav active" : "nav-item"}>
                    <span className='icon'><MdContacts /></span>
                    <span className='text'>Contact</span>
                </NavLink>
                </li>

                {/* Redirects to email to talk */}
                <li className='group'>
                    <a href='mailto:yadandlashruthi97@gmail.com' target='_blank' className='flex justify-center items-center flex-col gap-1 relative md:top-[12px] max-sm:top-5'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jdgfsfzr.json"
                            trigger="loop"
                            stroke="bold"
                            colors="primary:#f9c22e,secondary:#f9c22e"
                            style={{ width: "40px", height: "40px" }}>
                        </lord-icon>
                        <span className='invisible group-hover:visible scale-0 group-hover:scale-100 transition-all duration-700 text-sm'>Let's talk</span>
                    </a>
                </li>
            </ul>
            {/* Navbar's Part Ends */}
        </div>
    )
}

export default Header

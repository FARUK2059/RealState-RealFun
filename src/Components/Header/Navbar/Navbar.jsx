import { Link, NavLink } from "react-router-dom";
import users from "../../../../public/Logo/user.png"
import { LuUser2 } from "react-icons/lu";
import 'animate.css';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// AOS Link setup
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
AOS.init();


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("Your LogOut successfull")
            })
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <li><NavLink to="/user"> User Profile</NavLink></li>
        }
        {
            user && <li><NavLink to="/UpdateProfile"> Update Profile</NavLink></li>
        }
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div>
            <div data-aos="fade-down" data-aos-duration="1500" className="">
                <div className="navbar bg-neutral-600 animate__zoomIn animate__animated ">
                    <div className="navbar-start">
                        <div className="dropdown ">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-white z-50 p-1 shadow bg-white rounded-box w-52  ">
                                {links}
                            </ul>
                        </div >
                        <Link to="/" className="btn btn-ghost text-xl "><img className="h-12 lg:h-16 items-center" src="https://utouchdesign.com/themes/realfun/images/logo.png" alt="" /></Link>
                    </div>

                    <div className="navbar-center hidden md: lg:flex">
                        <ul className="menu menu-horizontal text-white text-lg font-medium px-1">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {
                            user ?
                                <Link to="/user">
                                    <div className="tooltip tooltip-left " data-tip={user?.displayName || "not found"}>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                            <div className="w-10 rounded-full">
                                                <img alt="null" src={user?.photoURL || users} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                :
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={users} />
                                    </div>
                                </div>

                        }


                        {
                            user ? <Link to="/"><button onClick={handleSignOut} className="btn btn-active btn-primary rounded-full"> <LuUser2 />Sign Out</button></Link> :
                                <Link to="/login"><button className="btn btn-active btn-primary rounded-full"><LuUser2 />Login</button></Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
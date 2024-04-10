import { Link, NavLink } from "react-router-dom";

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
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className=" ">
                <div className="navbar bg-[#D72050] rounded-t-lg">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-[#D72050] rounded-box w-52  ">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Estat LTD</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-4">
                            <div className="w-10 rounded-full">
                                <h2>amar suner bangla</h2>
                                <img alt="Tailwind CSS Navbar component" src={user} />
                            </div>
                        </div>

                        {
                            user ? <Link to="/login"><button onClick={handleSignOut} className="btn btn-active btn-primary">Sign Out</button></Link> :
                                <Link to="/login"><button className="btn btn-active btn-primary">Login</button></Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
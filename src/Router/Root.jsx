
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";



const Root = () => {
    return (
        <div className="noto-serif">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
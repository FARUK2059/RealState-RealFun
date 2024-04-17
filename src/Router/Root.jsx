
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Header/Navbar/Home/Footer/Footer";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className="noto-serif">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;
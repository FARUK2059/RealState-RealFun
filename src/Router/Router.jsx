import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Header/Navbar/Home/Home";
import About from "../Components/Header/Navbar/About/About";
import Login from "../Components/UserSection/Login/Login";
import Register from "../Components/UserSection/Register/Register";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Header/Navbar/Home/Home";
import About from "../Components/Header/Navbar/About/About";
import Login from "../Components/UserSection/Login/Login";
import Register from "../Components/UserSection/Register/Register";
import Error from "./Error";
import User from "../Components/Header/Navbar/LinkSection/User";
import EastDitails from "../Components/Header/Navbar/Home/EstateDitails/EastDitails";
import PrivetRout from "../Components/PrivetRout/PrivetRout";
import UpdateProfile from "../Components/Header/Navbar/LinkSection/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/user",
        element: <User></User>
      },
      {
        path: "/UpdateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estateditails/:id",
        loader: () => fetch('/data.json'),
        element: <PrivetRout>
          <EastDitails></EastDitails>
        </PrivetRout>
      }
    ],
  },
]);

export default router;

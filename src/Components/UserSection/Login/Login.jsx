import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import { useNavigate, useLocation } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signInPassword, user, logOut } = useContext(AuthContext);

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();
    const forms = location?.state || "/";

    
    const auth = getAuth(app);

    // Google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        // console.log("google mama is coming");
        signInWithPopup(auth, googleProvider)
            .then(Result => {
                const logUser = Result.user;
                console.log(logUser); 
                toast.success("Your LogIn successfully");
                navigat(forms);
                
            })
            .catch(error => {
                console.log(error)
                toast.error("Your login faild")
            })
    }

    // Login With GitHub
    const gitHubProvider = new GithubAuthProvider();

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const logGitUser = result.user;
            console.log(logGitUser);
            navigat(forms);
            toast.success("Your GitHub LogIn successfully")
        })
        .catch(error => {
            console.log(error);
            toast.error("Your GitHub login faild")
        })
    }
    
    // password Login
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signInPassword(email, password)
            .then(result => {
                console.log(result.user);
                navigat(forms);
                toast.success("Your LogIn successfull")
                
            })
            .catch(error => {
                console.error(error)
                toast.error("Inpute your current password")
            })
    }

    // sign Out/ Log out section
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                toast.success("LogOut successfully")
                navigat(forms);
                
            })
            .catch(error =>{
                console.log(error)
                toast.error("logOut faild")
            })
    }

    return (
        <div>
            <div className="grid justify-center  font-poppins p-10">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#eee] dark:text-gray-800 border">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-1 text-sm text-center">
                            <label className="label">
                                <span className="label-text text-black font-medium">Email address</span>
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="label">
                                <span className="label-text text-black font-medium">Password</span>
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border focus:dark:border-violet-600" required />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">Login</button>
                    </form>

                    <div className=" items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not Have An Account ?
                        <Link to="/register" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> Register</Link>
                    </p><br />
                    <h2>SingIn With other account</h2>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn btn-accent">Sign Out</button> :
                            <div className="flex gap-4 p-2">
                                <button onClick={handleGoogleSignIn} className="btn btn-primary"><span className=""><FcGoogle /></span> Google</button>
                                <button onClick={handleGitHubSignIn} className="btn btn-primary"><span><FaGithub /></span> GitHub </button>
                            </div>
                    }
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;
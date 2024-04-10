import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const { creatUser } = useContext(AuthContext);

    // const location = useLocation();
    // console.log(location);


    const handleregister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = e.target.tarms.checked;
        console.log(name, photoURL, email, password);

        if (!/[A-Z]/.test(name)) {
            toast.error('Your name should have  Upper cash carecter')
            return;
        }
        if (password.length < 6) {
            toast.error('Password should be at last 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at last on Upper cash carecter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should be have last on Lower cash carecter')
            return;
        }
        else if (!accepted) {
            toast.error("Please accepted our turms and condition")
            return;
        }

        // Creat user setup
        creatUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Your Registation successfully")
            })
            .catch(error => {
                console.log(error)
                toast.error("You already registered")
            })

    }


    return (
        <div>
            <div>
                <div className="grid justify-center p-10 font-poppins">
                    <div className="w-full max-w-md p-8  rounded-xl bg-[#eee] dark:text-gray-800 border">
                        <h1 className="text-2xl font-bold text-center">Register your account</h1>

                        <form onSubmit={handleregister} className="space-y-6">
                            <div className="space-y-1 text-sm text-center">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Your Name</span>
                                </label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md  dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                            </div>
                            <div className="space-y-1 text-sm text-center">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Photo URL</span>
                                </label>
                                <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                            </div>
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
                            </div>
                            <div className="mb-6 ">
                                <input type="checkbox" name="tarms" id="tarms" className="" />
                                <label className="ml-2" htmlFor="tarms"> Accept our <a className="text-blue-600" href=""> Tarms and Condition </a> </label>
                            </div>
                            <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">Submit</button>
                        </form>

                        <div className=" items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Dont’t Have An Account ?
                            <Link to="/login" id="##" rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> login</Link>
                        </p>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Register;
import { Link } from "react-router-dom";


const Login = () => {



    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        // signIn(email, password)
        //     .then(result => {
        //         console.log(result.user)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }

    return (
        <div>
            <div className="grid justify-center mb-6 font-poppins mt-10">
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
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
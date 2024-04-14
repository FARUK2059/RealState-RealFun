import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const User = () => {

    const { user, loading } = useContext(AuthContext);
    // console.log(user);

    if(loading) {
        return <div><span className="loading loading-spinner text-warning"></span></div>
    }


    return (
        <div className="mt-4">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://editor.liramail.com/images/realestate/realestate_pre/properties-1.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md border border-yellow-800 rounded-lg backdrop-blur-sm">
                        <div className="flex flex-col max-w-md p-6  text-white ">
                            <img src={user.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-lg sm:h-96 dark:bg-gray-500 aspect-square" />
                            <div className="overflow-x-auto mt-2">
                                <table className="table">
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Name</td>
                                            <td className=" text-yellow-500 font-bold text-lg">: {user.displayName} </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Email</td>
                                            <td className=" text-yellow-500 font-bold text-lg">: {user.email && <span>{user.email }</span> || <span>null</span> } </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="p-2">
                            <Link to="/"><button className="btn btn-primary"> Back to Home </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
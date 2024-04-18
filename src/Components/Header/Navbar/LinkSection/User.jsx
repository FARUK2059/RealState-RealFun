import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const User = () => {

    const { user, loading, updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('User Profile | Estate');
    }, [updateTitle]);

    if (loading) {
        return <div><span className="loading loading-spinner text-warning"></span></div>
    }


    return (
        <div  className="mt-4">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content -z-1 text-center text-neutral-content">

                    {/* Main Body */}
                    <div data-aos="zoom-in-down" data-delay="2000" data-aos-duration="2500" className="max-w-md border  border-yellow-800 rounded-lg backdrop-blur-sm -z-50">
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
                                            <td className=" text-yellow-500 font-bold text-lg">: {user.email && <span>{user.email}</span> || <span>null</span>} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex p-2 gap-4 justify-center">
                            <Link to="/"><button className="btn btn-primary"> Back to Home </button></Link>
                            <Link to="/UpdateProfile"><button className="btn btn-secondary"> Update Profile </button></Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default User;
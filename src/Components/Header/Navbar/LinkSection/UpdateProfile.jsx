
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useLocation, Link } from "react-router-dom";

const UpdateProfile = () => {

    // Update Dynamic title Setup
    const { updateTitle, updateUserProfile } = useContext(AuthContext);

    // Dynamic Title Creat
    useEffect(() => {
        updateTitle('Update Profile | Estate');
    }, [updateTitle]);

    // Navigation System
    const location = useLocation();
    const navigat = useNavigate();
    // const forms = location?.state? location.state : '/user';

    // update Profile
    const [displayName, setDisplayName] = useState(updateUserProfile.displayName || '');
    const [photoUrl, setPhotoURL] = useState(updateUserProfile.photoURL || '');
    const [isEditing, setIsEditing] = useState(true);


    const handleregister = async () => {

        updateUserProfile(displayName, photoUrl)
            .then(() => {
                navigat(location?.state ? location.state : '/');
                setIsEditing(false);
                toast.success("Your Registation and Login successfull")
            })
            .catch(error => {
                console.log(error)
                toast.error("You already registered, Please back to home")
            })
    }

    // Other Update Profile System
    // const handleregister = async () => {

    //     try {
    //         await updateUserProfile(displayName, photoUrl);
    //         setIsEditing(false);
    //         navigat(location?.state? location.state : '/user')
    //         toast.success("Update successfull, Check your Profile")


    //     } catch (error) {
    //         toast.error("Updating Faild, Please try Again")
    //     }

    // }

    useEffect(() => {
        setDisplayName(updateUserProfile.displayName || '');
        setPhotoURL(updateUserProfile.photoURL || '');
    }, [updateUserProfile]);

    return (
        <div>
            <div className="mt-4 -z-1">
                <div data-aos="fade-up" data-aos-duration="1500" className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div data-aos="zoom-in" data-delay="2000" data-aos-duration="2500" className="max-w-md border  border-yellow-800 rounded-lg backdrop-blur-sm">

                            {/* main Body */}
                            <div className="grid justify-center p-10 font-poppins ">
                                <div data-aos="zoom-out" data-delay="2500" data-aos-duration="1500" className="w-full max-w-md p-8  rounded-xl backdrop-blur-3xl card-body dark:text-gray-800 border">
                                    <h1 className="text-2xl font-bold text-center text-yellow-300">Update Profile</h1>

                                    <form onSubmit={handleregister} className="space-y-6 mt-4">

                                        {/* name  */}
                                        <div className="space-y-1 text-sm text-center">
                                            <label className="label">
                                                <span className="label-text text-blue-200 font-medium">Your Name</span>
                                            </label>
                                            <input type="text" name="name" value={displayName} id="name" placeholder="Input your name" onChange={(e) => setDisplayName(e.target.value)} className="w-full px-4 py-3 rounded-md  dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                        </div>

                                        {/* Photo URL  */}
                                        <div className="space-y-1 text-sm text-center">
                                            <label className="label">
                                                <span className="label-text text-blue-200 font-medium">Photo URL</span>
                                            </label>
                                            <input type="text" name="photo" value={photoUrl} id="photo" placeholder="Inpute your photo URL" onChange={(e) => setPhotoURL(e.target.value)} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                                        </div>

                                        {/* Submit Button  */}
                                        <div className="">
                                            <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">{isEditing ? 'Update' : 'Edit'}</button>
                                        </div>

                                    </form>
                                </div>
                                <div className="p-4">
                                    <Link to="/user"><button className="btn btn-secondary w-3/4">
                                        See Profile</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;
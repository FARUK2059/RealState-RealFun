
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const UpdateProfile = () => {

    // Update Dynamic title Setup
    const { updateTitle, updateUserProfile } = useContext(AuthContext);

    useEffect(() => {
        updateTitle('Update Profile | Estate');
    }, [updateTitle]);

    // update Profile
    const [displayName, setDisplayName] = useState(updateUserProfile.displayName || '');
    const [photoUrl, setPhotoURL] = useState(updateUserProfile.photoURL || '');
    const [isEditing, setIsEditing] = useState(true);

    const handleregister = async () => {

            try {
                await updateUserProfile(displayName, photoUrl);
                setIsEditing(false);
                toast.success("Update successfull, Check your Profile")
              } catch (error) {
                toast.error("Updating Faild, Please try Again")
              }

    }

    useEffect(() => {
        setDisplayName(updateUserProfile.displayName || '');
        setPhotoURL(updateUserProfile.photoURL || '');
    }, [updateUserProfile]);

    return (
        <div>
            <div className="grid justify-center p-10 font-poppins">
                <div className="w-full max-w-md p-8  rounded-xl bg-[#eee] dark:text-gray-800 border">
                    <h1 className="text-2xl font-bold text-center">Update Profile</h1>

                    <form onSubmit={handleregister} className="space-y-6 mt-4">

                        {/* name  */}
                        <div className="space-y-1 text-sm text-center">
                            <label className="label">
                                <span className="label-text text-black font-medium">Your Name</span>
                            </label>
                            <input type="text" name="name" value={displayName} id="name" placeholder="Input your name" onChange={(e) => setDisplayName(e.target.value)} className="w-full px-4 py-3 rounded-md  dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                        </div>

                        {/* Photo URL  */}
                        <div className="space-y-1 text-sm text-center">
                            <label className="label">
                                <span className="label-text text-black font-medium">Photo URL</span>
                            </label>
                            <input type="text" name="photo" value={photoUrl} id="photo" placeholder="Inpute your photo URL" onChange={(e) => setPhotoURL(e.target.value)} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border  focus:dark:border-violet-600" required />
                        </div>

                        {/* Submit Button  */}
                        <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 dark:bg-violet-600">{isEditing ? 'Update' : 'Edit'}</button>

                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
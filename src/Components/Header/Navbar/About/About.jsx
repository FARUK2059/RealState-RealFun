
// dynamic Title
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext, useEffect } from "react";

const About = () => {

    // Update Dynamic title Setup
    const { updateTitle } = useContext(AuthContext);

    useEffect(() => {
        updateTitle('About | Estate');
    }, [updateTitle]);

    return (
        <div>
            <h2>This is about</h2>
        </div>
    );
};

export default About;
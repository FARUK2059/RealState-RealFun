
import { useContext, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";



const EastDitails = () => {

    // Update Dynamic title Setup
    const { updateTitle } = useContext(AuthContext);

    useEffect(() => {
        updateTitle('EstateDitails | Estate');
    }, [updateTitle]);



    // /***/ Estate Ditails Data Loade
    const estateDitails = useLoaderData();
    // console.log(estateDitails);
    const { id } = useParams();
    const estateInt = parseInt(id);
    // console.log(id);
    const estate = estateDitails?.find((estat) => estat.id === estateInt)
    // console.log(estate);

    const { image, segment_name, estate_title, description, price, status, area, location } = estate;


    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="mt-4">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="grid lg:grid-cols-3 lg:p-3 md:p-2 p-1 lg:gap-8 md:gap-4 gap-2 mt-6 mb-6">

                        {/* Left Side img */}
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="grid lg:col-span-2 justify-center items-center text-center  rounded-2xl">
                            <img className="min-h-full mx-auto rounded-2xl" src={image} alt="" />
                        </div>

                        {/* ditails section  */}
                        <div data-aos="fade-down-left" data-aos-duration="1500"  className=" gap-2 text-white backdrop-blur-sm">
                            <h2 className=" lg:text-4xl text-[#facc15] text-3xl font-extrabold border rounded-full ">{segment_name}</h2>
                            <h4 className=" font-semibold text-xl mt-2 mb-2">Title : {estate_title} </h4>
                            <hr />
                            <h5 className="text-[#131313b3]  text-xl font-mediumtext-[16px] mt-2 mb-2"> Ditails</h5>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">ID</td>
                                            <td className=" text-green-300 font-bold text-lg">: {estate.id} </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Description</td>
                                            <td className=" text-green-300 font-bold text-lg">: {description}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Price</td>
                                            <td className=" text-green-300 font-bold text-lg">: {price}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Status</td>
                                            <td className=" text-green-300 font-bold text-lg">: {status}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Area</td>
                                            <td className=" text-green-300 font-bold text-lg">: {area}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Location</td>
                                            <td className=" text-green-300 font-bold text-lg">: {location}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr className="hover">
                                            <td className="text-lg font-medium">Facilities</td>
                                            <td className=" text-green-300 font-bold text-lg flex gap-3">:
                                                {
                                                    estate.facilities.map((este) => <div key={este}>
                                                        <div className="">
                                                            {este}
                                                        </div>
                                                    </div>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div className="p-2">
                                <Link to="/"><button className="btn btn-ghost text-yellow-200 border-white">Back to Home</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EastDitails;
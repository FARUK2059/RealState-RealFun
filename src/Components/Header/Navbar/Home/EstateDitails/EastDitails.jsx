
// import { Link, useLoaderData, useParams } from "react-router-dom";
import { Link, useLoaderData, useParams } from "react-router-dom";


const EastDitails = () => {


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
        <div className="mt-4">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://demoapus1.com/justhome/wp-content/uploads/elementor/thumbs/p19-qlye011aq8021d2wkwmxcx1bf1n8ovhb7dz70p8q7w.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="grid lg:grid-cols-3 p-4 gap-8 mt-6 mb-6">

                        {/* Left Side img */}
                        <div className="grid lg:col-span-2 justify-center items-center text-center rounded-2xl">
                            <img className="min-h-full rounded-2xl" src={image} alt="" />
                        </div>

                        {/* ditails section  */}
                        <div className=" gap-2 text-white">
                            <h2 className=" lg:text-4xl text-[#facc15] text-3xl font-extrabold border rounded-full ">Name : {segment_name}</h2>
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
                                <Link to="/"><button className="btn btn-ghost text-yellow-200">Back to Home</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EastDitails;


import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const MainBody = () => {

    const [RealStateData, setRealStateData] = useState([]);
    // console.log(RealStateData);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setRealStateData(data));
    }, []);


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 gap-2 p-4">
            {
                RealStateData.map(estate => <div key={estate.id}>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-300 dark:text-gray-800">
                        <div className="flex space-x-4">

                            <div className="flex flex-col space-y-1">
                                <h2 className="text-xl font-semibold text-blue-600">{estate.segment_name}</h2>
                            </div>
                        </div>
                        <div>

                            <div>
                                <div className="hero mx-auto h-72 rounded-lg relative" style={{ backgroundImage: `url(${estate.image})` }}>
                                    <div className="hero-overlay bg-opacity-0"></div>
                                    <div className="hero-content text-end text-neutral-content">
                                        <div className="-mt-60 absolute  p-2 lg:ml-72 md:ml-64 ml-52 ">
                                            <div className="badge badge-accent lg:h-8 md:h-6 h4  w-auto lg:text-lg md:text-md text-sm rounded-sm text-white">For {estate.status}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" text-start mt-2">
                                <div className="">
                                    <button className="btn btn-sm btn-accent text-yellow-300 text-lg font-medium ">{estate.price}</button>
                                </div>
                                <h2 className="mb-1 text-xl font-semibold">{estate.estate_title}</h2>
                                <div className="flex gap-2 items-center">
                                    <IoLocationOutline />
                                    <p className="text-lg dark:text-gray-600"> {estate.location} </p>
                                </div>
                                <p className="text-black"> Area : {estate.area}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <Link to={`/estateditails/${estate.id}`}><button className="btn btn-primary">View Property</button></Link>
                            <div className="flex space-x-2 text-sm dark:text-gray-600">
                                <div className="flex space-x-2 items-center">
                                    <div>
                                        <h2>Johan William</h2>
                                    </div>
                                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                                        <LuUser2 />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MainBody;
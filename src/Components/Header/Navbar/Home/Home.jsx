
import MainBody from "./MainBody/MainBody";
import Slider from "./Slider/Slider";

// dynamic Title
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useContext, useEffect } from "react";
import TemSection from "./TemSection";
import SeenSection from "./SeenSection";


const Home = () => {

    // Update Dynamic title Setup
    const { updateTitle } = useContext(AuthContext);

    useEffect(() => {
        updateTitle('Home | Estate');
    }, [updateTitle]);


    return (
        <div>

            <div className="mb-4">

                {/* Slider Section */}
                <div data-aos="fade-up" data-aos-duration="1500" className="mt-4">
                    <Slider></Slider>
                </div>
                {/* Titel section */}
                <div data-aos="zoom-in" data-aos-duration="1500" className="text-center p-6">
                    <h1 className="mb-5 text-5xl font-bold text-white">Special Estate</h1>
                    <p className="mb-5 text-xl font-semibold text-green-200">Akira is a professional Prestashop theme. It comes with a lot of features and variations: Responsive Layout, Mega Menu, Page Builder, Elementor, Awesome Slider Revolution, RTL, Product Quick View, Ajax Search, Ajax Cart, Ajax product filter, Easy One Click To Install… and so much more.</p>
                </div>

                {/* Main Body */}
                <div data-aos="zoom-in" data-aos-duration="1500">
                    <MainBody></MainBody>
                </div>

                {/* Tem Section */}
                <div>
                    <TemSection></TemSection>
                </div>

                {/* People Behind The sen section */}
                <div>
                    <SeenSection></SeenSection>
                </div>


            </div>
        </div>
    );
};

export default Home;
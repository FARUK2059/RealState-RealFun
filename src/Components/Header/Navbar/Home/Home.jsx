
import MainBody from "./MainBody/MainBody";
import Slider from "./Slider/Slider";

// import HomeBanner from "./HomeBanner/HomeBanner";


const Home = () => {

    return (
        <div>
            <div className="mb-4">
                <div className="mt-4">
                    <Slider></Slider>
                </div>
                {/* Titel section */}
                <div className="text-center p-6">
                    <h1 className="mb-5 text-5xl font-bold text-white">Special Estate</h1>
                    <p className="mb-5 text-xl font-semibold text-green-200">Akira is a professional Prestashop theme. It comes with a lot of features and variations: Responsive Layout, Mega Menu, Page Builder, Elementor, Awesome Slider Revolution, RTL, Product Quick View, Ajax Search, Ajax Cart, Ajax product filter, Easy One Click To Install… and so much more.</p>
                </div>
                <div className="">
                    <MainBody></MainBody>
                </div>
                <div>
                    {/* <HomeBanner></HomeBanner> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
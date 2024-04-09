import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://cdnphotos.rmcloud.com/idx-onerls-v5/88762185.000.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://ap.rdcpix.com/1b1e0e1e493e087b724e0a49eaf05662l-m2045422064od-w480_h360_x2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://ap.rdcpix.com/e42491500e027670aa2c4f3ff5351f68l-m1026025344od-w480_h360_x2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.desktopbackground.org/download/960x544/2015/10/27/1032720_high-quality-bungalow-wallpapers_1024x680_h.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://png.pngtree.com/background/20210709/original/pngtree-city-high-rise-building-lake-water-pink-cartoon-background-picture-image_944863.jpg" />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='h-36 max-w-full'>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}

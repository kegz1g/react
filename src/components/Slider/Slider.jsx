import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css';
import { banners } from '../../data';
import Card from '../Card/Card';
// import Banner from '../components/Banner/Banner';
// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Card {...banners[0]} /></SwiperSlide>
                <SwiperSlide><Card {...banners[1]} /></SwiperSlide>

            </Swiper>
        </>
    );
}

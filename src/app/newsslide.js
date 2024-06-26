'use client'
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
    const progressCircle = useState(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {


    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/1.png" />
                    <div>test</div>
                </SwiperSlide>

                <SwiperSlide><img src="/2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/3.png" /></SwiperSlide>
                <SwiperSlide><img src="/4.png" /></SwiperSlide>
                <SwiperSlide><img src="/5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/6.jpg" /></SwiperSlide>
                _________________________________________________________________________________________________________________________________________________________________________________________________________________________
                <div class="text-center hr-primary">
                <a href="/blogs/news" class="btn btn-block btn-link text-muted">ดูทั้งหมด</a>
            </div>
            _________________________________________________________________________________________________________________________________________________________________________________________________________________________
                <div className="autoplay-progress" slot="container-end">


                </div>
            </Swiper>
        </>
    );
}
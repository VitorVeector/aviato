import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './styles.scss'

import 'swiper/scss';
import 'swiper/scss/navigation'

import { SlideContent } from '../SlideContent';

export const Slider = () => {
    return (
        <div className='sliderContent'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                className='swiper-button-black'
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className='slide slide1'>
                    <SlideContent />
                </SwiperSlide>
                <SwiperSlide className='slide slide2'>
                    <SlideContent />
                </SwiperSlide>
                <SwiperSlide className='slide slide3'>
                    <SlideContent />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
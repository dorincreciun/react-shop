import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SectionBrands = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 3</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 4</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 5</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 6</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center bg-blue-950 h-20 flex items-center justify-center">Slide 7</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
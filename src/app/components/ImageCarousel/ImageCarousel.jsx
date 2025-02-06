"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000 }}
            className="relative"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="rounded-xl overflow-hidden shadow-lg">
                    <div className="relative group">
                        <Image
                            src={image}
                            alt={`Interface ${index + 1}`}
                            width={600}
                            height={400}
                            className="rounded-xl transition-transform group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarousel;

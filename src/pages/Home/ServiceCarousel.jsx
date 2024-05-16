import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { FaPaintBrush, FaCode, FaBullhorn } from "react-icons/fa"; // Example icons

const ServiceCarousel = () => {
  const ServiceData = [
    {
      title: 'UI/UX Design',
      subTitle: 'Creating visually appealing and user-friendly interfaces.',
      backgroundImage: 'https://i.ibb.co/zFdjhnb/website-development-and-design-1.jpg',
      icon: FaPaintBrush,
    },
    {
      title: 'Web Development',
      subTitle: 'Building responsive and functional websites.',
      backgroundImage: 'https://i.ibb.co/0hLTthM/ui-ux-design.png',
      icon: FaCode,
    },
    {
      title: 'Digital Marketing',
      subTitle: 'Promoting your business online effectively.',
      backgroundImage: 'https://i.ibb.co/S5GYJd1/Software-testing.png',
      icon: FaBullhorn,
    },
  ];

  return (
    <div className="flex flex-col my-20 h-auto items-center justify-center">
      <Swiper
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-10 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-[215px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative flex flex-col gap-3 z-10">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-lg md:text-xl lg:text-2xl">{item.title}</h1>
                <p className="text-sm md:text-md lg:text-lg">{item.subTitle}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 transition-transform duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;

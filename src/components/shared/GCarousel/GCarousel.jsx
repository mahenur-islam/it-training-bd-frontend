/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { RxArrowTopRight } from "react-icons/rx";

const GeneralCarousel = ({ data, height, titleColor, subTitleColor }) => {
  return (
    <Box sx={{ my: 20, height: height || '900px' }}>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <Box
              className="group relative shadow-lg text-white rounded-xl px-6 py-8"
              sx={{
                mb: 10,
                height: { xs: '250px', lg: '400px' },
                width: { xs: '215px', lg: '350px' },
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <Box
                className="absolute inset-0 bg-cover bg-center blur"
                sx={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <Box
                className="absolute inset-0 bg-black opacity-70 group-hover:opacity-50"
                sx={{ transition: 'opacity 0.3s' }}
              />
              <Box className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400" sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" sx={{ color: titleColor || 'white' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: subTitleColor || 'white' }}>
                  {item.subTitle}
                </Typography>
              </Box>
              <RxArrowTopRight
                className="absolute bottom-5 left-5 text-white group-hover:text-blue-500 group-hover:rotate-45"
                sx={{ width: 35, height: 35, transition: 'transform 0.1s' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default GeneralCarousel;

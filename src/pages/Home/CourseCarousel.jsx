/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Button, Grid, Typography } from "@mui/material"; // Import Box and Typography from Material-UI

const CourseCarousel = ({ data }) => {
  return (
    <div>
      <Box sx={{ my: 20 }}>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 10,
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
                className="relative shadow-lg text-black rounded-xl px-0 pt-0 pb-1 hover:bg-yellow-100"
                sx={{
                  mb: 10,
                  height: { xs: "250px", lg: "400px" },
                  width: { xs: "215px", lg: "300px" },
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-1/2 object-cover relative"
                />
                <Box
                  className="absolute top-0 left-0 z-10 text-black p-1 rounded-br-lg bg-white"
                  sx={{ opacity: 1 }}
                >
                  {item.duration}
                </Box>
                <Box className="relative flex flex-col gap-3 p-3">
                  <Typography
                    variant="h5"
                    sx={{ color: item.titleColor || "black" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: item.subtitleColor || "black" }}
                  >
                    {item.subTitle}
                  </Typography>
                </Box>
               <Grid container spacing={2} className="p-2">
                <Grid item ><Button variant="contained" >Learn More</Button></Grid>
                <Grid item ><Button variant="outlined" >Enroll Now</Button></Grid>
               </Grid>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default CourseCarousel;
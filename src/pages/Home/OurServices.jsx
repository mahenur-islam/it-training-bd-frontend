import { Box, Typography } from "@mui/material";
import ServiceCarousel from "./ServiceCarousel";


const OurServices = () => {
  return (
    <div>
      <Box className= 'mx-auto text-center space-y-2'>
        <Typography fontWeight={'800'} fontFamily={'inter'} color={' rgb(22 163 74)'}>Our Services</Typography>
        <Typography fontSize={30} fontFamily={'inter'} variant="h3" fontWeight={'500'}>
          Our Services Fostering a playful & engaging learning environment
        </Typography>
      </Box>
      <Box>
      <ServiceCarousel />
      </Box>
    </div>
  );
};

export default OurServices;

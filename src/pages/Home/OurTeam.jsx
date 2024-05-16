import { Box, Typography, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { LinkedIn, Facebook, Twitter } from '@mui/icons-material';
import './OurTeam.css'; // Ensure you have this CSS file for custom styles

// Sample team data
const teamData = [
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    experience: '5 years',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Jane Smith',
    designation: 'Product Manager',
    experience: '8 years',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Alice Johnson',
    designation: 'UX Designer',
    experience: '4 years',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
  {
    name: 'Bob Brown',
    designation: 'Marketing Specialist',
    experience: '6 years',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  },
];

const OurTeam = () => {
  return (
    <Box py={4} bgcolor="#ffcd31" className="p-10 mx-auto">
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="700" fontFamily="Inter">
          Our Team
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Meet our experienced and dedicated team members
        </Typography>
      </Box>
      <Swiper
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                py: 5,
                my: 10,
                maxWidth: 345,
                margin: 'auto',
                borderRadius: '16px',
              }}
            >
              <Box display="flex" justifyContent="center" mt={4}>
                <Avatar
                  alt={member.name}
                  src={member.image}
                  sx={{ width: 150, height: 150, borderRadius: '50%' }}
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="center"
                >
                  {member.designation}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="center"
                >
                  {member.experience}
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                  <IconButton
                    component="a"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    component="a"
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className="custom-pagination" />
    </Box>
  );
};

export default OurTeam;

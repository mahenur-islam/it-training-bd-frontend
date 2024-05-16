import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';


const reviews = [
  {
    quote: "This course changed my life! The instructors were knowledgeable and engaging.",
    courseName: "Web Development Bootcamp",
    learnerImage: "https://via.placeholder.com/150",
    learnerName: "John Doe",
    learnerOccupation: "Software Engineer",
  },
  {
    quote: "I gained so much confidence and skills after completing this course.",
    courseName: "Data Science Masterclass",
    learnerImage: "https://via.placeholder.com/150",
    learnerName: "Jane Smith",
    learnerOccupation: "Data Analyst",
  },
  // Add more reviews as needed
];

const LearnerCarousel = () => {
  return (
    <Box py={4} bgcolor="#f5f5f5">
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="700" fontFamily="Inter">
          Learner Reviews
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Hear from our successful learners
        </Typography>
      </Box>
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
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                my: 10,
                mx: 'auto',
                maxWidth: '80%',
                borderRadius: '16px',
                backgroundColor: '#fff',
                textAlign: 'center',
                py: 5,
                px: 3,
              }}
            >
              <img src={''} alt="Logo" style={{ width: 50, margin: '0 auto 20px' }} />
              <CardContent>
                <Typography variant="body1" fontStyle="italic" mb={3}>
                  "{review.quote}"
                </Typography>
                <Typography variant="h6" fontWeight="500">
                  {review.courseName}
                </Typography>
                <Box display="flex" justifyContent="center" mt={4}>
                  <Avatar
                    alt={review.learnerName}
                    src={review.learnerImage}
                    sx={{ width: 100, height: 100, borderRadius: '50%' }}
                  />
                </Box>
                <Typography variant="h6" fontWeight="600" mt={2}>
                  {review.learnerName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.learnerOccupation}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default LearnerCarousel;

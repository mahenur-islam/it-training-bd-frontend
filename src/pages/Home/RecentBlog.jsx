import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

const blogData = [
  {
    category: 'Tech',
    title: 'Understanding AI and Machine Learning',
    subtitle: 'A comprehensive guide to the world of AI.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
  {
    category: 'Health',
    title: 'The Benefits of a Balanced Diet',
    subtitle: 'How to maintain a healthy lifestyle.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
  {
    category: 'Travel',
    title: 'Top 10 Travel Destinations for 2023',
    subtitle: 'Explore the most beautiful places in the world.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
  {
    category: 'Finance',
    title: 'Investment Tips for Beginners',
    subtitle: 'How to get started with investing.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
  {
    category: 'Education',
    title: 'The Future of Online Learning',
    subtitle: 'How online education is changing the world.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
  {
    category: 'Lifestyle',
    title: 'Minimalist Living: A Simple Guide',
    subtitle: 'Tips for a clutter-free life.',
    image: 'https://via.placeholder.com/600x400',
    description: 'Learn more',
  },
];

const RecentBlog = () => {
  return (
    <Box py={4} bgcolor="#f9f9f9" className="p-10 mx-auto">
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="700" fontFamily="Inter">
          Recent Blog Posts
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Check out our latest articles and blog posts
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
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {blogData.map((post, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography
                  sx={{ color: 'primary.main' }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {post.category}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  href="#"
                >
                  {post.description}
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default RecentBlog;

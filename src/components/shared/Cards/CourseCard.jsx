import { Box, Typography, Button } from "@mui/material";
import { FaPaintBrush, FaCode, FaBullhorn } from 'react-icons/fa';

const CourseCard = () => {
  const courseData = [
    {
      title: 'UI/UX Design',
      subTitle: 'Creating visually appealing and user-friendly interfaces.',
      image: 'https://i.ibb.co/zFdjhnb/website-development-and-design-1.jpg',
      icon: FaPaintBrush,
    },
    {
      title: 'Web Development',
      subTitle: 'Building responsive and functional websites.',
      image: 'https://i.ibb.co/0hLTthM/ui-ux-design.png',
      icon: FaCode,
    },
    {
      title: 'Digital Marketing',
      subTitle: 'Promoting your business online effectively.',
      image: 'https://i.ibb.co/S5GYJd1/Software-testing.png',
      icon: FaBullhorn,
    },
  ];

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={4}
      p={4}
      bgcolor="#f5f5f5"
    >
      {courseData.map((course) => (
        <Box
          key={course.title}
          bgcolor="white"
          borderRadius="12px"
          overflow="hidden"
          boxShadow={3}
          maxWidth="300px"
          textAlign="center"
          className="group"
        >
          <Box component="img" src={course.image} alt={course.title} width="100%" height="200px" />
          <Box p={2}>
            <Box display="flex" justifyContent="center" my={2}>
              <course.icon style={{ fontSize: 32, color: '#16a34a' }} />
            </Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {course.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={2}>
              {course.subTitle}
            </Typography>
            <Box display="flex" justifyContent="space-around" mt={2}>
              <Button
                variant="contained"
                color="primary"
                className="hover-effect"
                sx={{ transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}
              >
                See Details
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="hover-effect"
                sx={{ transition: 'transform 0.3s', ':hover': { transform: 'scale(1.05)' } }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CourseCard;
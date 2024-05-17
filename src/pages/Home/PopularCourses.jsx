import { FaPaintBrush, FaCode, FaBullhorn } from 'react-icons/fa';
import CourseCarousel from './CourseCarousel';

const courseData = [
  {
    title: "UI/UX Design",
    subTitle: "Creating visually appealing and user-friendly interfaces.",
    image: "https://i.ibb.co/zFdjhnb/website-development-and-design-1.jpg",
    icon: FaPaintBrush,
    titleColor: 'red',
    subtitleColor: 'blue'
  },
  {
    title: "Web Development",
    subTitle: "Building responsive and functional websites.",
    image: "https://i.ibb.co/0hLTthM/ui-ux-design.png",
    icon: FaCode,
  },
  {
    title: "Digital Marketing",
    subTitle: "Promoting your business online effectively.",
    image: "https://i.ibb.co/S5GYJd1/Software-testing.png",
    icon: FaBullhorn,
  },
];

const PopularCourses = () => {
  return (
    <div>
        <CourseCarousel data={courseData}/>
    </div>
  );
};

export default PopularCourses;
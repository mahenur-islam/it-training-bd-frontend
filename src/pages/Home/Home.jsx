import { Box } from "@mui/material";
import Hero from "./Hero";
import OurServices from "./OurServices";
import CourseCard from "../../components/shared/Cards/CourseCard";
import Heading from "../../components/shared/heading/Heading";
import OurTeam from "./OurTeam";
import LearnerReview from "./LearnerReview";
import Footer from "../../components/shared/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box className="my-20">
        <OurServices />
      </Box>
      <Box className="my-20">
        <Heading title={"Most Popular Courses"} subtitle={""} />
        <CourseCard />
      </Box>
      <Box className="my-20">
        <Heading title={""} subtitle={""} />
        <OurTeam />
      </Box>
      <Box>
        <LearnerReview />
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
}
export default Home;

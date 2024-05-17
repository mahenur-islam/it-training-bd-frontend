import { Box } from "@mui/material";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Heading from "../../components/shared/heading/Heading";
import OurTeam from "./OurTeam";
import LearnerReview from "./LearnerReview";
import PopularCourses from "./PopularCourses";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box className="my-10">
        <OurServices />
      </Box>
      <Box className="mb-10">
        <Heading title={"Most Popular Courses"} subtitle={"Explore more courses"}/>
       <PopularCourses />
      </Box>
      <Box className="my-20">
        <Heading title={""} subtitle={""} />
        <OurTeam />
      </Box>
      <Box>
        <LearnerReview />
      </Box>
    </div>
  );
}
export default Home;

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DrawOutlineButton from "../../components/shared/outlineButton/DrawOutlineButton";
import Characteristics from "./Characteristics";
// import Collaboration from "./Collaboration";

const Hero = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            'url("https://i.ibb.co/MfrJFPj/bg-it-training-bd.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      {/* Hero Container  */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ position: "relative" }}
      >
        {/* Hero Text */}
        <Grid item xs={12} md={6} sx={{ mx: "6" }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                my: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2.5rem", md: "3rem", xl: "5rem" },
              }}
            >
              Up your skills <br />
              to advance your career path
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 2, textAlign: { xs: "center", md: "left" } }}
            >
              Learn UI-UX Design skills with weekend UX. The latest online
              learning system and material that help your knowledge growing.
            </Typography>
            <Box mt={2} textAlign="center" sx={{ mt: { xs: 4 } }}>
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: { xs: "center", md: "left" } }}
              >
                <Grid item>
                  {/* <Button
                    sx={{
                      backgroundColor: "#ffcd33",
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        background: "transparent",
                        border: "1px solid black",
                      },
                    }}
                  >
                    Get Started
                  </Button> */}
                  <DrawOutlineButton>Get Started</DrawOutlineButton>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      backgroundColor: "#ffcd",
                      color: "black",
                      fontWeight: "bold",
                      border: "none",
                      "&:hover": {
                        background: "transparent",
                        border: "1px solid black",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ my: 5 }}>
            <Characteristics />
          </Box>
        </Grid>
        {/* Image or other content for laptop screen */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <img
            src="https://i.ibb.co/N7txFmt/Untitled-design-11.png"
            alt="A woman with books on hand"
            style={{
              width: "100%",
              height: "auto",
              // display: "block",
            }}
          />
        </Grid>
      </Grid>
      {/* <Box className='w-full bg-gray-500'>
        <Collaboration/>
      </Box> */}
    </Container>
  );
};

export default Hero;

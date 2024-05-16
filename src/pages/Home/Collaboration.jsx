import { Box, Grid, Typography } from "@mui/material";

const Collaboration = () => {
  const logo = [
    "https://i.ibb.co/6Bc68RC/scene-logo-after-310a7581.webp",
    "https://i.ibb.co/FVzdqRH/text-photography-free-download-png-text-photography-logo-11563009057rlkk2loelr.png",
    "https://i.ibb.co/bF0tWjR/images-2.png",
    "https://i.ibb.co/4dqshVh/logo-text-font-design.jpg",
  ];
  return (
    <Box className="w-full">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
       <Box className="p-2">
       <Typography
            variant="h3"
            sx={{ fontFamily: "inter", fontSize: "3rem", fontWeight: 700 }}
          >
            100+
            <span style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
              {" "}
              Collaboration
            </span>
          </Typography>
       </Box>
        </Grid>
        {logo.map((index) => (
          <Grid item key={index} xs={6} sm={4} md={2} lg={2}>
            <img
              src={`${index}`}
              alt={`id-Aek-R6-MWH-${index}`}
              border="0"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Collaboration;

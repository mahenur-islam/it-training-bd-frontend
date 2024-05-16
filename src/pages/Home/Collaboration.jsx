import { Box, Grid, Typography } from "@mui/material";

const Collaboration = () => {
  const logo = [
    "https://i.ibb.co/b6Qkzp3/Vector-2.png",
    "https://i.ibb.co/YTT5zMg/User-Testing-logo-Black.png",
    "https://i.ibb.co/BLQmW1B/Vector-1.png",
    "https://i.ibb.co/qy617Tf/Vector.png",
  ];

  return (
    <Box className="w-full" display="flex" justifyContent="center">
      <Grid container spacing={10} alignItems="center" justifyContent="left">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Box className="p-2" textAlign="center">
            <Typography
              variant="h3"
              sx={{ fontFamily: "inter", fontSize: "3rem", fontWeight: 700, color:'gray' }}
            >
              25+
            </Typography>
            <Typography className="text-sm text-gray-500">
              Collaboration
            </Typography>
          </Box>
        </Grid>
        {logo.map((src) => (
          <Grid item key={src} xs={6} sm={4} md={2} lg={2}>
            <img
              src={src}
              alt="Collaboration Logo"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Collaboration;

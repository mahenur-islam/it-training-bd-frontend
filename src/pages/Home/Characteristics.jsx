import { Box, Grid } from "@mui/material";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';

const Characteristics = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item>
              <RecordVoiceOverOutlinedIcon style={{ color: "blue" }} />
            </Grid>
            <Grid item>Public Speaking</Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item>
              <BusinessCenterOutlinedIcon style={{ color: "green" }} />
            </Grid>
            <Grid item sx={{color:'black'}}>Career Orineted</Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item>
              <PsychologyAltOutlinedIcon style={{ color: "orange" }} />
            </Grid>
            <Grid item>Creative Thinking</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Characteristics;

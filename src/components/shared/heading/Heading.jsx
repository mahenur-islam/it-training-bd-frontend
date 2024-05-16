import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Heading = ({ 
  title, 
  subtitle, 
  fontWeight = '500', 
  backgroundColor = 'transparent', 
  backgroundImage = '', 
  fontFamily = 'Inter', 
  titleFontSize = '2rem',
  subtitleFontSize = '1rem'
}) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 4,
        px: 2,
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {title && (
        <Typography 
          variant="h3" 
          fontWeight={fontWeight} 
          fontFamily={fontFamily}
          sx={{ fontSize: titleFontSize }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography 
          variant="subtitle1" 
          color="textSecondary" 
          fontFamily={fontFamily}
          sx={{ fontSize: subtitleFontSize }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fontWeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  fontFamily: PropTypes.string,
  titleFontSize: PropTypes.string,
  subtitleFontSize: PropTypes.string
};

export default Heading;

import { Box, CircularProgress, useTheme } from '@mui/material';

const Loader = () => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress
        sx={{
          backgroundColor: palette.common.black,
          borderRadius: '100px',
          padding: '5px',
          circle: {
            color: palette.common.white,
          },
        }}
        disableShrink
      />
    </Box>
  );
};

export default Loader;

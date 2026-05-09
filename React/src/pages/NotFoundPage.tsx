import { Box, Typography } from '@mui/material';

function NotFoundPage() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        404
      </Typography>
      <Typography color="text.secondary">
        Page not found.
      </Typography>
    </Box>
  );
}

export default NotFoundPage;

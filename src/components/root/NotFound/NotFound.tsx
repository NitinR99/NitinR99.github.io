import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={2}
      height={500}
      gap={4}
    >
      <Typography variant="h1">Uh oh! 404</Typography>
      <Typography color="text.secondary">Resource not found</Typography>
      <Button size="small" variant="contained" href="/" sx={{ mt: 2 }}>
        Go Home
      </Button>
    </Box>
  );
}

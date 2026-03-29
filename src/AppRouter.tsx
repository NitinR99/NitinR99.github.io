import Box from "@mui/material/Box";
import ThemeToggle from "components/root/ThemeToggle";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

/**
 * The application router.
 */
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Box position="fixed" top={4} right={4}>
        <ThemeToggle />
      </Box>
    </>
  );
}

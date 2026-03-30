import Box from "@mui/material/Box";
import ConsoleMessage from "components/root/ConsoleMessage";
import Footer from "components/root/Footer";
import NotFound from "components/root/NotFound";
import ThemeToggle from "components/root/ThemeToggle";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

/**
 * The application router.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Box position="fixed" top={4} right={4}>
        <ThemeToggle />
      </Box>
      <Box sx={{ height: "100vh" }} component="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ConsoleMessage />
      </Box>
    </BrowserRouter>
  );
}

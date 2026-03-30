import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ConsoleMessage from "components/root/ConsoleMessage";
import Footer from "components/root/Footer";
import NotFound from "components/root/NotFound";
import ThemeToggle from "components/root/ThemeToggle";
import DataProtection from "pages/DataProtection";
import Home from "pages/Home";
import LegalNotice from "pages/LegalNotice";
import { BrowserRouter, Route, Routes } from "react-router";

/**
 * The application router.
 */
export default function AppRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Box position="fixed" top={4} right={4}>
        <ThemeToggle />
      </Box>
      <Container sx={{ height: "100vh" }} component="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ConsoleMessage />
      </Container>
    </BrowserRouter>
  );
}

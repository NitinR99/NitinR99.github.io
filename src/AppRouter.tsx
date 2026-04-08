import Box from "@mui/material/Box";
import ConsoleMessage from "components/root/ConsoleMessage";
import Footer from "components/root/Footer";
import NavigationBar from "components/root/NavigationBar";
import NotFound from "components/root/NotFound";
import ScrollToTop from "components/root/ScrollToTop";
import DataProtection from "pages/DataProtection";
import Home from "pages/Home";
import LegalNotice from "pages/LegalNotice";
import { BrowserRouter, Route, Routes } from "react-router";
/**
 * The application router.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <ScrollToTop />
      <Box sx={{ height: "100vh", mt: 20 }} component="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ConsoleMessage />
      </Box>
    </BrowserRouter>
  );
}

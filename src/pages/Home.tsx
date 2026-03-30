import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import EducationSection from "components/home/EducationSection";
import LandingSection from "components/home/LandingSection";
import ReachOutSection from "components/home/ReachOutSection";
import VolunteeringSection from "components/home/VolunteeringSection";
import WorkExperienceSection from "components/home/WorkExperienceSection";
import ConsoleMessage from "components/root/ConsoleMessage";
import Footer from "components/root/Footer";
import SectionNavigator from "components/root/SectionNavigator";
import { Section } from "components/root/SectionNavigator/SectionNavigator";

const sections: Section[] = [
  { id: "who-am-i", label: "Who am I?" },
  { id: "work-experience", label: "Work Experience" },
  { id: "academics", label: "Academics" },
  { id: "volunteering", label: "Volunteering" },
];

export default function Home() {
  return (
    <Box sx={{ height: "100vh" }} component="main">
      <Container>
        <LandingSection />
      </Container>
      <Divider />
      <Container>
        <WorkExperienceSection />
      </Container>
      <Divider />
      <Container>
        <EducationSection />
      </Container>
      <Divider />
      <Container>
        <VolunteeringSection />
      </Container>
      <Divider />
      <Container>
        <ReachOutSection />
      </Container>
      <Footer />
      <SectionNavigator sections={sections} />
      <ConsoleMessage />
    </Box>
  );
}

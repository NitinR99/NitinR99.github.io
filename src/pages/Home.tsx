import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import EducationSection from "components/home/EducationSection";
import LandingSection from "components/home/LandingSection";
import ReachOutSection from "components/home/ReachOutSection";
import VolunteeringSection from "components/home/VolunteeringSection";
import WorkExperienceSection from "components/home/WorkExperienceSection";
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
    <>
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
      <SectionNavigator sections={sections} />
    </>
  );
}

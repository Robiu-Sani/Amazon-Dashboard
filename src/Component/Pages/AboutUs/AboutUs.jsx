import AboutBanner from "./AboutBanner";
import AboutSection from "./AboutSection";
import TeamMembers from "./TeamMembers";

export default function AboutUs() {
  return (
    <div className="w-full">
      <AboutBanner />
      <AboutSection></AboutSection>
      <TeamMembers />
    </div>
  );
}

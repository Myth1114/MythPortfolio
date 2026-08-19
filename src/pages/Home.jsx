import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import AboutPreview from "../components/about/AboutPreview";
import ContactCTA from "../components/contact/ContactCTA";
import ContactSection from "../components/contact/ContactSection";
import GitHubStats from "../components/github/GitHubStats";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsSection />

      {/* <ContactCTA /> */}
      <GitHubStats />
      <ContactSection />
    </>
  );
}

export default Home;

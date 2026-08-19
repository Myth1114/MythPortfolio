import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import AboutPreview from "../components/about/AboutPreview";
import ContactCTA from "../components/contact/ContactCTA";
import ContactSection from "../components/contact/ContactSection";
import GitHubStats from "../components/github/GitHubStats";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Frontend Developer"
        description="Mithilesh Yadav is a frontend developer based in Nepal, building thoughtful, responsive digital experiences with React, JavaScript and modern web technologies."
        path="/"
      />
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

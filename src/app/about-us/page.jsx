import AboutIntro from "@/components/about/AboutIntro";
import FounderStory from "@/components/about/FounderStory";

export const metadata = {
  title: "About Us | care.xyz",
  description: "Learn about care.xyz and our mission to provide compassionate caregiving.",
};

const AboutPage = () => {
  return (
    <main>
      <AboutIntro />
      <FounderStory />
    </main>
  );
};

export default AboutPage;

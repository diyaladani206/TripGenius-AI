import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import Destinations from "../components/Destinations";
import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import AIFeatures from "../components/AIFeatures";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (!sectionId) return;

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <Destinations />
        <WhyChoose />
          <Stats />
            <AIFeatures />
<Testimonials />
  <Newsletter />
    <Footer />
    </>
  );
}

export default Home;
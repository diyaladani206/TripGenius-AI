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
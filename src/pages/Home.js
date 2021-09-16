import About from "../components/About";
import { homeObjOne, homeObjTwo } from "../components/Data";
import Discography from "../components/Discography";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      <Discography />
      <Footer />
    </div>
  );
};

export default Home;

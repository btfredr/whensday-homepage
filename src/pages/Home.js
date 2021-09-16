import About from "../components/About";
import { homeObjOne, homeObjTwo } from "../components/Data";
import Discography from "../components/Discography";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      <Discography />
    </div>
  );
};

export default Home;

import About from "../components/About";
import { homeObjOne, homeObjTwo } from "../components/Data";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
    </div>
  );
};

export default Home;

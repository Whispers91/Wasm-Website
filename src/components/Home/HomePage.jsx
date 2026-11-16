import Hero from "./hero/Hero";
import Problem from "./problem/Problem";
import HowItWorks from "./howItWorks/HowItWorks";
import Example from "./example/Example";
import Footer from "./footer/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Example />
      <Footer />
    </>
  );
}

export default HomePage;

import Example from "./example/example";
import Hero from "./hero/Hero";
import HowItWorks from "./howItWorks/HowItWorks";
import Problem from "./problem/Problem";

function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks/>
    </main>
  );
}

export default HomePage;

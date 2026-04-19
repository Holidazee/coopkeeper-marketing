import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import UseCases from "./components/UseCases.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

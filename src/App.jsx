import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-6">
      <div className="divider-sketch" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Problem />
        <Divider />
        <Features />
        <Divider />
        <HowItWorks />
        <Divider />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

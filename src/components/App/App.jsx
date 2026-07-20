import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Stats from "../Stats/Stats";
import Pricing from "../Pricing/Pricing";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

import {
  navLinks,
  features,
  stats,
  plans,
  testimonials,
} from "../../data/data";

function App() {
  return (
    <div className="wrapper">
      <Header navLinks={navLinks} />
      <Hero
        title={"Керуй командою в одному місці"}
        subtitle="Orbit об'єднує задачі, чати та файли в простому інтерфейсі"
        ctaText="Спробувати безкоштовно"
      />
      <Features features={features} />
      <Stats stats={stats} />
      <Pricing plans={plans} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}

export default App;

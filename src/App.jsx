import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import units from "./data/units";
import Units from "./components/Units";

function App() {
  // seleciona a unidade via query param, ex: ?unit=unidade2
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const unitKey = params ? params.get("unit") || "unidade1" : "unidade1";

  return (
    <>
      <Hero units={units} unitKey={unitKey} />
      <Units units={units} />
      <Diferenciais />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
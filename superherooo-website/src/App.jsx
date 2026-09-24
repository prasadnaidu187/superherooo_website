import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBusinesses from "./components/TrustedBusinesses";
import CoreValues from "./components/CoreValues";
import WhyChooseUs from "./components/WhyChooseUs";
import WhySuperherooo from "./components/WhySuperherooo";
import Ecosystem from "./components/EcosystemFlow";
import SuperheroooPromise from "./components/Superherooopromise "; 
import AppDownloadCTA from "./components/Appdownloadcta";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* SUPERHEROOO website sections will be added here */}
        <Hero />
      </main>
      <TrustedBusinesses />
      <CoreValues />
      <WhyChooseUs />
      <WhySuperherooo />
      <Ecosystem />
      <SuperheroooPromise />
      <AppDownloadCTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
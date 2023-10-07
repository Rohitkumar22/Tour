import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Lokesh from "./components/Lokesh";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Lokesh />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;

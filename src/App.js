import About from "./components/about";
import Carsforrent from "./components/carsforrent";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navigation from "./components/navigation";


function App() {
  return (
    <div >
      <Navigation/>
      <Hero/>
      <Carsforrent/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

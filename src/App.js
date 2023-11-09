import About from "./components/about";
import Carsforrent from "./components/carsforrent";
import Contact from "./components/contact";
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
    </div>
  );
}

export default App;

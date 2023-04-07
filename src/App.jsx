import { BrowserRouter } from "react-router-dom";
import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import { sunsetBg } from "./assets";
import EarthCanvas from "./components/canvas/Earth";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";
import Footer from "./components/Footer";

const App = () => {
  return ( 
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="">
          <video autoPlay muted loop id="myVideo" className="video-bg">
            <source src={sunsetBg} type="video/mp4" />
          </video>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] earth-canvas'
          >
            <EarthCanvas />
          </motion.div>
            <Navbar className="navbar" />
            <Hero className="hero" />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
   );
}
 
export default App;

import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
  
  <Navbar title="TextUtlis" about="About TextUtlis"/>
  
  <div className="container">
  {/* <TextForm/> */}
  <Routes>
  <Route path="/" element={<TextForm />} />
  <Route path="/About.js" element={<About />} />
  {/* <About/> */}
  
  
  </Routes>
  </div>
  
  </Router>
  <Footer/>
  
  
   </>
  );
}

export default App;

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
   
  <Navbar title="TextUtlis" about="About TextUtlis"/>
  <div className="container">
  
  <Router>
  <Routes>
  <Route index element={<TextForm />} />
  
  <Route path="/About.js" element={<About />} />

  </Routes>
  </Router>
  
  
 
  </div>
  <Footer/>
  
   </>
  );
}

export default App;

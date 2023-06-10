import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {

  return (
   <>
   
  <Navbar title="TextUtlis" about="About TextUtlis"/>
  <div className="container">
  <TextForm/>
  
  {/* <About/> */}
  
  
 
  </div>
  <Footer/>
  
   </>
  );
}

export default App;

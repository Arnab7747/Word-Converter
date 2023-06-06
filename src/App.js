import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
  <Navbar title="TextUtlis" about="About TextUtlis"/>
  <div className="container">
  <TextForm/>
  
  <Footer/>

  </div>
  
  
   </>
  );
}

export default App;

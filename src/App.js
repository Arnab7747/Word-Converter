import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  // const[alert,setAlert]=useState(null)
  // const serAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
     
  //   })
  // }
  return (
   <>
  <Navbar title="TextUtlis" about="About TextUtlis"/>
  <div className="container">
  {/* <TextForm/> */}
  <Routes>
  <Route path="/" element={<TextForm />} />
  <Route path="/About.js" element={<About />} />
  {/* <About/> */}
  
  
  </Routes>
  </div>
  
  
   </>
  );
}

export default App;

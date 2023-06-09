import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import { useState } from 'react';

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
  {/* <Alert alert="this is alert"/> */}
  <div className="container">
  <TextForm/>
  
  <Footer/>

  </div>
  
  
  
   </>
  );
}

export default App;

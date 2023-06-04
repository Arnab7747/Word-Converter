import React ,{useState} from "react";




export default function TextForm(props){
    const[text,setText] = useState("enter text here");

    const handleUpClick=()=>{
        console.log("uppercase was clicked")
        let newText= text.toLocaleUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    
    return(
    <>
   
    <div>
        <h1>{props.heading}</h1>
      <label for="mybox" className="form-label">Enter Your Text here</label>
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8}></textarea>
     
      <button className="btn  btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
    
  
    </>
    )
}
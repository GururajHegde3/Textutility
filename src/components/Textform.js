import React,{useState} from 'react'


export default function Textform(props) {

    
    const handleUpCase=()=>{
        console.log("uppercase was clicked"+text);
        let ntext=text.toUpperCase();
        newtext(ntext)

    }
    const handleLoCase=()=>{
        console.log("uppercase was clicked"+text);
        let ntext=text.toLowerCase();
        newtext(ntext)

    }
    const handleonspace=()=>{
        let removedSpacesText = text.replace(
            / /g,
            ""
        );
        newtext(removedSpacesText)
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        newtext(event.target.value)

    }
   
    const [text, newtext]=useState('');
    return (
        <>
        <div className='container' >
                <h1>{props.heading}</h1>
                <div className='mb-3'> 
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(168 168 168)':'white',color:props.mode==='dark'?'#462626':'dark'}}id="Tarea" rows="10" ></textarea>
                <link rel="stylesheet" href="texf.css" />
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3 " onClick={handleUpCase}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoCase}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleonspace}>Remove Spaces</button>
         </div>
         <div className="container my-3">
            <h1>Text Summary</h1>
            <p>Your Text Contains {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split("").length} Minutes taken to read above text</p>
         </div>
    
        
        </>
    )
}


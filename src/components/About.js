import React,{useState} from 'react'

export default function About() {

const[mystyle,setMyStyle]=useState( {
      color:'black',
      backgroundColor:'white'
  })
  const[btntext,setBtnText]= useState("enable dark mode")

   const ToggleStyle=()=>{
if(mystyle.color==='black'){
  setMyStyle({
    color:'white',
    backgroundColor:'black',
    border:'1px solid white'

  })
  setBtnText("Enable light mode");
}
else{
  setMyStyle({
    color:'black',
    backgroundColor:'white'
  })
  setBtnText("Enable Dark mode")
}

}
   
  return (
    <div classNameName='container' my-3 >
      <h1 classNameName='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle}data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        
Analyzing text involves examining its content to extract meaningful information and insights. This process can include identifying themes, sentiments, and patterns using various techniques like natural language processing (NLP). By understanding the text's structure and context, one can draw conclusions and make informed decisions based on the data.
    </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"style={mystyle} aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
      Free-to-use resources are accessible to everyone without cost, promoting inclusivity. They include software, educational materials, and online services, supporting various endeavors. Utilizing these options helps individuals and organizations save money while accessing high-quality tools and information.
    </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={mystyle} aria-expanded="false" aria-controls="collapseThree">
       User Friendly
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle}>
      User-friendly resources are designed for ease of use, making them accessible to people with varying levels of expertise. They feature intuitive interfaces, clear instructions, and supportive documentation. By prioritizing user experience, these resources enhance productivity and satisfaction.
   </div>
    </div>
  </div>
</div>
<div className='container my-3'>
<button type="button" onClick={ToggleStyle} className="btn btn-primary">{btntext}</button>
</div>      
        
      
    </div>
  )
}

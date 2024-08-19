
import { useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    },4000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#7880b6'
      showAlert("dark mode is enabled","success")
    }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("light mode is enabled","success")
  }

  }

  return (
    
   <>
   <Router>
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
   <div className="container">
    <Alert alert={alert}/>
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
   </Router>
   </>
  
  );
}

export default App;

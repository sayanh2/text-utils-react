import './App.css';
import React, { useState } from 'react'
import FormText from './my-components/FormText';
import Navbar from './my-components/Navbar';
// import AboutUs from './my-components/AboutUs';
import Alert from './my-components/Alert';


function App() {

  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#272f4c'
      showAlert("Dark mode has been Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "success")
    }
  }

  const showAlert = (message, type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <FormText mode={mode} showAlert={showAlert}/>
    {/* <AboutUs/> */}
    
    </>
  );
}

export default App;

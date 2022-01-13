
import './App.css';
import './first.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() =>{
          setAlert(null);
        },2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');      
      document.body.style.backgroundColor = '#9430b3';
      showAlert("Dark mode is enabled", "success");
     document.title = 'Textutils -Darkmode';
     setInterval(() => {
      document.title = 'Textutils is amazing';
     }, 2000);
     setInterval(() => {
      document.title = 'Install Textutils now';
     }, 1500);
    }
    else{
      setMode('light');      
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Textutils -Lightmode';

    }
  }
  


  
  return (
       <>
       
       {/* <Router> */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       
       <div className="container my-3">
       {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter the text you want" mode={mode} />

          {/* </Route>
        </Switch>         */}
       </div>       
       
       {/* </Router> */}
       </>
  );
}

export default App;



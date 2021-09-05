import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//  import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() { 
  const [mode, setMode] = useState('light'); // Told me Whether dark mode is enabled  or not
  const [alert, setAlert] = useState(null); // yaha alert ko ek Onbject bana rahe hai 
  
  const showAlert = (message, type)=>{ // here Showalert function hai   alert msg ko show kane me help karega
        setAlert({
          msg: message,
          type: type,
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);

  }
  const  toggleMode = ()=>{
     if(mode === 'light'){
       setMode ('dark');
       document.body.style.backgroundColor = '#1d0446';
       showAlert("Dark mode has been Enabled", "success");
       document.title = 'TextAnalyzer - Dark Mode';

       // Title ko continue change karne ke liye use hota hai
      //  setInterval(() => {
      //    document.title = 'TextAnalyzer is Awsome Mode';
         
      //  }, 2000);

      //  setInterval(() => {
      //    document.title = ' Install TextAnalyzer now';
         
      //  }, 1600);
       }
      else{
        setMode ('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been Enabled", "success");
        document.title = 'TextAnalyzer - Light Mode';
     }
   } 

  return ( 
    <>
   {/* <Navbar title ="Mytext" aboutText="About MyText"/> */}
   {/* <Router> */}
   <Navbar title ="Mytext" mode={mode} toggleMode={toggleMode} />
   <Alert alert= {alert}/>

   <div className="container my-3">
   {/* <Switch>
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route exact path="/"> */}
    <Textform showAlert ={showAlert} heading="ENTER THE TEXT TO ANALYSIS BELOW" mode={mode}/>
          {/* </Route>
        </Switch> */}

   </div>
    {/* </Router> */}
  </>
  );
}

export default App;

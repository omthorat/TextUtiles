import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const removeClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')

  }

  const toggleMode=(cls)=>{
    console.log(cls)
    removeClass();
    document.body.classList.add('bg-'+cls)
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey'
    showAlert("DARK MODE IS ACTIVE" ,"Succsess")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("LIGHT MODE IS ACTIVE" ,"Succsess")
  }
  }
  const[alert ,setAlert]=useState()
  const showAlert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(()=>{
       setAlert(null)
    },2000)
     
    

  }
  
  return (
    <>
 <Router>
    <Navbar title="TextUtils" dropDown="Features" about="About" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert} mode={mode}/>
    <div className="container">
    <Routes>
          <Route path="/about"
            element={<About  mode={mode} />} />
          
          <Route path="/"
            element={<Textform mode={mode} showAlert={showAlert}/>} />
        </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;

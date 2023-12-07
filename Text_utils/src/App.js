
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{useState} from 'react'


function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert= (msg,typ)=>{
      setAlert({
        msg : msg,
        typ : typ
      })
  }
  const toggle =()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disabled",'warning')
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = "#02142e"
      showAlert("Dark mode is enabled",'success')
    }
  }

  return (
    <>
    <Navbar title="Textutils" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform mode={mode} showAlert = {showAlert}/>
    </div>
    </>
  );
}

export default App;

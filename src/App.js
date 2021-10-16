import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
function App() {
  const [alert, setAlert] = useState(null);  
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
  <>
    <Router>
  <Navbar title="Textutilize" aboutText="about"/>
  <Alert alert={alert}/>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform heading="Enter Text to analyze below" showAlert={showAlert}/>
          </Route>
  </Switch>
  </Router>
  </>
 );
}

export default App;

import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import SwitchMode from './component/switchMode';
import 'animate.css';
// import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  // let [temanSaya, setTemanSaya] = useState(1);
  // const [namaTeman, setNamaTeman] = useState("Fikri");
  
  // useEffect(() => {
  //     if (temanSaya < 0) {
  //       setTemanSaya(0)
  //     }
  //   },[temanSaya]) 



  return (

      <Router>
        <div className="container-fluid p-0">
          <Header/>
          <Routes>  
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/Contact" element={<Contact/>} />
          </Routes>
          <SwitchMode/>
        </div>
      </Router>

   
    
  );
}

export default App;

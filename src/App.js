import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import SwitchBox from './Components/SwitchBox/SwitchBox';


function App(props) {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <SwitchBox/>
      <Footer/>
    </div>
  );
}

export default App;
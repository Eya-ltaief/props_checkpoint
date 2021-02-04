import React from 'react';
//importing components from component profile
import Navigation from "./profile/profile component/Navigation";
import Profile from "./profile/profile component/Profile";
import Contact from "./profile/profile component/Contact";
import About from "./profile/profile component/About";
import './App.css';
function App() {
  return (
    <div className="App">
      <Navigation /> 

      <Profile  name="Aya Letaief" bio="GoMycode" profession="Full Stack Web Developpement">
        <img src="/images/profile.jpg"  alt="profile" style={{height: "50%",
        marginTop: "20%", marginLeft: "-3%"}}></img>
      </Profile>

      <About/>
      <Contact /> 
    </div>
  );
}
export default App;

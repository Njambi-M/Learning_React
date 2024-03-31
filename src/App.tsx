import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from"./components/MyButton";
import AboutPage from"./components/AboutPage";
import Profile from "./components/Profile";

function App() {
  return(
  <div>
        <h1>Welcome to my app</h1>
        <MyButton/>
        <AboutPage/>
        <Profile/>
      </div>
      );
}

export default App;

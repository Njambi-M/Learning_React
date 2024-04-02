import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from"./components/MyButton";
import AboutPage from"./components/AboutPage";
import Profile from "./components/Profile";
import ShoppingList from './components/ShoppingList';
import {useState} from "react";

import Section from "./components/Section";
import Heading from "./components/Heading";

function App() {
  const[count, setCount] = useState(0);

        function handleClick(){
          setCount(count + 1);
      }
  return(
  <div>
        <h1>Welcome to my app</h1>
        {/* <MyButton/>
        <MyButton/> */}
        <AboutPage/>
        <Profile/>
        <ShoppingList/>
        <h1>Counters that update separately</h1>
        <MyButton count ={count} onClick={handleClick}/>
        <MyButton count ={count} onClick={handleClick}/>

          <Section level={1}>
          <Heading>Title</Heading>
          <Section level={2}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>

          <Section level={3}> 
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          
          <Section level={4}>
          <Heading>Sub-sub-heading</Heading>

          <Section level={5}>
            <Heading>Sub-sub-sub-heading</Heading>

          <Section level={6}>
          <Heading>Sub-sub-sub-sub-heading</Heading>
          <Heading>Sub-sub-sub-sub-heading</Heading>
        </Section>
        </Section>
        </Section>
        </Section>
        </Section>
        </Section>
      </div>
      
      );
}

export default App;

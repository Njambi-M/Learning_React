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

        <Section>

          <Heading level={1}>Title</Heading>
          <Section>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
          <Heading level={4}>Sub-sub-heading</Heading>
          <Heading level={5}>Sub-sub-sub-heading</Heading>
          <Section>
          <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
          <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
        </Section>
        </Section>
        </Section>
        </Section>
      </div>
      
      );
}

export default App;

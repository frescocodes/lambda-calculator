import React from "react";
import "./App.css";
import NumberButton from './components/ButtonComponents/NumberButtons/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButtons/OperatorButton';
import SpecialButton from'./components/ButtonComponents/SpecialButtons/SpecialButton';
import Display from './components/DisplayComponents/Display'; 

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display />
        <div className="buttons_wrapper">

          <div className="leftSide_buttons">
              <SpecialButton />
              <NumberButton />
            
          </div> 
          <div className="operatorButtons_wrapper">
            <OperatorButton />
          </div>
        </div>
  </div>
  </div>
  );
}

export default App;

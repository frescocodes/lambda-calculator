import React, { useState } from "react";
import Numbers from "./Numbers";


const NumberButton = () => {
  return (
    <div className="numberButtons_wrapper">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Numbers />
    </div>
  );
};


export default NumberButton;
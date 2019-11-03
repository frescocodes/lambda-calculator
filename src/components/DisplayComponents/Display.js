import React, { useState } from "react";

const Display = () => {
  const [ output ] = useState(1337);
  return <div className="display">{output}<span>🧮</span></div>;
};

export default Display;
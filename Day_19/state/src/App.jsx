
import React from "react"
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import Button4 from "./components/Button4";
import  "./App.css";
function App() {
 
  return (
    <div>
        <h1 className="para"> If you will click number it will increment the Value</h1>
        <center>
        <Button1/>
        <Button2/>
        <Button3/>
        <Button4/>
        </center>
    </div>
  );
}

export default App;

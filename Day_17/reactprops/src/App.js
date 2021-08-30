
import './App.css';
import React from "react"
import Card from './components/Card';

function App() {
 
  return (
    <div className="App">
      <header> Calorie Read Only</header>
      <div className="scrollable">
      <div className= "card">
      <Card itemName="Pizza" title="56"/>
      <Card   itemName="Burger" title="69"/>
      <Card   itemName="Coke" title="500"/>
      <Card itemName="Browne" title="180"/>
      <Card   itemName="Fried Rice"title="90" />
      <Card  itemName="Lassania" title="200" />
      <Card itemName="Pani Puri" title="10" />
    
    </div>
    </div>
    </div>
  );
}

export default App;

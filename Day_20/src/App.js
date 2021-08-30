
import './App.css';
import React, { useState } from "react"
import Card from './components/Card';
import data from './data.json';
const App=()=> {
  const [state,setState]=useState(data)
 
  return (
    <>
      <section className="parentDiv">{
          state.length > 0 ? state.map((food,id) => {
            return <Card state={state} setState={setState} food={food} key={id }/>
          }) : <h1>No more element left.</h1>
         } )
      </section>
  </>
  );
}

export default App;

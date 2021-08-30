import React from 'react';
const Card= ({food,state,setState}) =>
{
    let handleClick=()=>{ 
        let newState= state.filter((el) => el.id !==food.id)    
        setState(newState)
    };
    

    return (
     
         <div className="item">
             <h1 className="itemName">{food.food}</h1>

             <h3> {food.food} contains {food.calorie} amount of calories.
             
             <button onClick={handleClick}>Delete</button>
             </h3>
        

        </div>)

}
export default Card; 
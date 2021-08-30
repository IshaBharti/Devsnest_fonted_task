import { Children } from "react";
import "./Card.css"
const verticals=["","","","","","","",""]
const horizontals =["","","","","","","",""]
export default function Cards(){
   let board=[];
   for (let j=verticals.length-1;j>=0;j--){

   for(let i=1; i<horizontals.length;i++){
        board.push(<div className="tile">{horizontals[i]} {(verticals[j])}</div>)}}
   
return <div id ="boards"> {board}</div>;


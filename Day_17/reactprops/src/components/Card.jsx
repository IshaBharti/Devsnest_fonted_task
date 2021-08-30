// import "./Card.css"
const Card= (props) =>
{
    

    return (
     
         <div className="item">
             <h2 className="itemName">{props.itemName}</h2>

             <p className="title"> You have consumed {props.title}calories.</p>
        

        </div>)

}
export default Card;
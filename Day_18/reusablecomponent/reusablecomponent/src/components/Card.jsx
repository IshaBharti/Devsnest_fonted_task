// import "./Card.css"
const Card= (props) =>
{
    

    return (
     
         <div className="item">
            
             { props.title > 50 ? 
                <i class="fa fa-cutlery fa-1x fa-pull-right fa-border" style= {{ fontSize:"30px", color:"white", backgroundColor:"red"  }}></i> :
                <i class="fa fa-cutlery fa-1x fa-pull-right fa-border" style= {{ fontSize:"30px", backgoundColor: "orange" }}></i>}

<h2 className="itemName">{props.itemName}</h2>
             <p className="title"> You have consumed {props.title}calories.</p>
        

        </div>)

}
export default Card;

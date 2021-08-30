import "./style.css"
import { useState,useEffect } from "react"
import Templates from "./Components/Templates"
import Meme from "./Components/Meme"



export default function Day22App(){
const [templates, setTemplates] = useState([])
const [meme, setMeme] = useState(null)


useEffect (() => {
        fetch(' https://api.imgflip.com/get_memes')
        .then((res) => res.json())
        .then((data) => {
            setTemplates(data.data.memes)
        })
    },[])
    return (<div className="day22App">
        <h1 > Meme Genrator</h1>
        {meme === null ?  ( <Templates templates={templates} setMeme= {setMeme}/>) : (<Meme meme={meme} setMeme={setMeme} />)}
      
        </div>
    )
}
import React from "react"
import memesData from "../memesData"

 
 function Meme() {
// Creates memeImage state
const [imageMeme, setImageMeme] = React.useState("http://i.imgflip.com/1bij.jpg")
 
function getImageMeme() {
    // Selects random images from memes array
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    setImageMeme(memesArray[randomNumber].url)
}
return (
        // Creates a form component
        <main>
                <div className="form">
                <input type="text" id="top-text" className="form--input" placeholder="Top text"/>
                <input type="text" className="form--input" placeholder="Bottom text"/>
                <button onClick={getImageMeme}className="form--button">Get a new meme image 🖼️</button>
                <img src={imageMeme} className="meme--image"/>
                </div>
        </main>
    )
}
 
 
export default Meme
import React from "react"
import memesData from "../memesData"

 
 function Meme() {
// Creates memeImage state
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemes, setAllMemes] = React.useState([])

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])



// const [imageMeme, setImageMeme] = React.useState("http://i.imgflip.com/1bij.jpg")
 
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}
//     // Selects random images from memes array
//     const memesArray = memesData.data.memes
//     const randomNumber = Math.floor(Math.random() * memesArray.length) 
//     setImageMeme(memesArray[randomNumber].url)
// }
// return (
//         // Creates a form component
//         <main>
//                 <div className="form">
//                 <input type="text" id="top-text" className="form--input" placeholder="Top text"/>
//                 <input type="text" className="form--input" placeholder="Bottom text"/>
//                 <button onClick={getImageMeme}className="form--button">Get a new meme image 🖼️</button>
//                 <img src={imageMeme} className="meme--image"/>
//                 </div>
//         </main>
//     )
}
 
 
export default Meme
 function Form() {
    return (
        // Creates a form component
        <div>
            <form className="form">
                <input type="text" className="form--input"></input>
                <input type="text" className="form--input"></input>
                <button className="form--button">Get a new meme image 🖼️</button>
            </form>
        </div>
    )
}

export default Form
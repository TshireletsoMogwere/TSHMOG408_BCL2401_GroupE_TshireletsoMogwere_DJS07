 function Form() {
    return (
        // Creates a form component
        <main>
            <form className="form">
                <div>
                <label htmlFor="top-text">Top text</label>
                </div>
                <div>
                <input type="text" id="top-text" className="form--input" placeholder="Shut up"/>
                </div>
                <label>Bottom text</label>
                <input type="text" className="form--input" placeholder="and take my money"/>
                <button className="form--button">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

export default Form
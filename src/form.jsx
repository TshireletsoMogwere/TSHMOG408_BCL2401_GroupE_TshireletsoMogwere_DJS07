 function Form() {
    return (
        // Creates a form component
        <main>
            <form className="form">
                <div>
                <label htmlFor="top-text">Top text</label>
                <input type="text" id="top-text" className="form--input" placeholder="Shut up"/>
                </div>
                <div>
                <label>Bottom text</label>
                <input type="text" className="form--input" placeholder="and take my money"/>
                </div>
                <button className="form--button">Get a new meme image 🖼️</button>
            </form>
        </main>
    )
}

export default Form
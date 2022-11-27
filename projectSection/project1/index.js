
function Nav(){
    return (
        <header>
            <nav className="nav">
                <img className="project_img" src="../../img/Logo.png"  width="50px"/>
                <ul className="nav-items">
                    <li>
                        <a className="nav__link" href="../../index.html" >Main</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../../enhuijiang222.html" >Resume</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../../AboutMeSection/aboutMeIndex.html"  >About Me</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../../projectSection/index.html" >Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function Meme() {
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

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
function App() {
    return (
        <div>
            <Nav/>
            <Meme />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
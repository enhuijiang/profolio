
function Nav(){
    return (
        <header>
            <nav className="nav">
                <img className="project_imag" src="../img/Logo.png"  width="50px"/>
                <ul className="nav-items">
                    <li>
                        <a className="nav__link" href="../index.html" >Main</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../enhuijiang222.html" >Resume</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../AboutMeSection/aboutMeIndex.html" >About Me</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../projectSection/index.html" >Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function Project1(){
    return(
        <div>
            <h1 className="header_project" > Project</h1>
            <img src="../projectSection/img3/project_img.jpeg" width="100%"/>
            <div className="project1">
                 <img  className="project_icon"  src="../projectSection/img3/project_icon.jpeg" width="5%"/>
                            <div className="project1_textArea">
                                <a className="project1__link" href="../projectSection/project1/index.html">meme generator(JavaScript, React) </a>
                                <p> when the app first load,it will reach out to a API
                                and get 100 of most popular meme images at that time.
                                and give the user the ability add text in a image,
                                or click Get a new meme image to change to image</p>
                            </div>
            </div>
        </div>
    )

}
function Project(){
    return (
        <div>
            <Nav/>
            <Project1/>
        </div>
    )
}



ReactDOM.render(<Project/>, document.getElementById("root"))
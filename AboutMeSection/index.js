


function Nav(){
    return (
        <header>
            <nav className="nav">
                <img src="img2/Logo.png"  width="50px"/>
                <ul className="nav-items">
                    <li>
                        <a className="nav__link" href="../index.html" >Main</a>
                    </li>
                    <li>
                        <a className="nav__link" href="../enhuijiang222.html" >Resume</a>
                    </li>
                    <li>
                        <a className="nav__link" href="aboutMeIndex.html" >About Me</a>
                    </li>
                    <li>
                        <a className="nav__link" href="enhuijiang222.html" >Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Nav/>
            <div className="container">
              <h2 className="title fade-in-image">
                <span className="title-word title-word-1">About </span>
                <span className="title-word title-word-2">Me</span>
              </h2>
            </div>

            <div className="HeadArea">
                    <img className="abountMeImg2 fade-in-image" src="img2/aboutMeImg4.jpeg" width="50% "alt="Avatar"/>
                <div className="Head_textArea">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Enhui Jiang.&nbsp;&nbsp;I graduated from Brooklyn college with a degree
                        in computer science.&nbsp;&nbsp;Through my educational study, I’ve gained experience
                        using programming languages such as Java, C++, SQL and more.</p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On my last internship, I’ve also refined my technical skills,problem-solving skill
                        and understand the importance of teamwork and how I must support my co-worker to achieve
                        company's mission.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After I graduated,&nbsp;I couldn’t commit to a full-time job because of the pandemic
                        COVID-19 and family issues.&nbsp;&nbsp;Instead, I was improving my technical skills by taking
                        Udemy course Java Programming Master- which covers Java 11 Java 17 and later
                        I obtained my Oracle certifications of Java SE 8.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personally speaking, I am happy and wiling to learn new technologies and incorporate
                        them with what I’ve been doing.&nbsp;&nbsp;Keeping learning and being curious always refreshes
                        my mindset to have a better understanding of the world and see all kinds of possibilities.
                    </p>
                </div>
            </div>
        </div>
    )


}

ReactDOM.render(<Page/>, document.getElementById("root"))

function MainPage(){
    return(
        <div className="mainPage justwidth">
            <section className="top">
                <h1>Kassim Zaid</h1>
                <h3>Frontend Developer</h3>
            </section>
            <section className="middle">
                <div className="buttonContainer">
                    <a className="mainLinks envelope" href="mailto:kzaid0767@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope"></i> Email
                    </a>
                    <a className="mainLinks linkedins" href="https://www.linkedin.com/in/kassim-zaid-4b2474288/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                </div>
                <h3 className="middleHeadings">About me</h3>
                <p className="middleparagraphs">I am deeply passionate about frontend development. I relish the challenge of taking
                    a Figma design and turning it into a live creation. I am constantly pushing myself to learn and explore the ever evolving
                    nuances of frontend development. I see myself building a large scale App in the near future.
                </p>
                <h3 className="middleHeadings">Interests</h3>
                <p className="middleparagraphs bottom">When I am not coding or learning some aspects of coding, I enjoy spending
                    my time being immersed in sports. This can be excersing outdoors, swimming, and coaching soccer. I also enjoy watching
                    soccer, football, basketball, and track. I am not into the Messi and Ronaldo debate, but my choice is Pele over
                    Maradona.
                </p>
            </section>
        </div>
    )
}

export default MainPage
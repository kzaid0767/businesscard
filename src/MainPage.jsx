
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
                <h3 className="middleHeadings">About</h3>
                <p className="middleparagraphs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reiciendis maiores hic 
                    iure veniam reprehenderit perferendis qui quas eligendi </p>
                <h3 className="middleHeadings">Interests</h3>
                <p className="middleparagraphs bottom">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas illum hic laudantium 
                    consequatur est aperiam similique, dicta earum fugiat 
                    maxime velit sequi quidem possimus quibusdam quae dolorem accusamus esse!</p>
            </section>
        </div>
    )
}

export default MainPage
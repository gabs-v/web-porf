import React from 'react'
import '../static/css/Home.css'

const Home = () => {
    return ( 
        <div className='all'>
            <div className='header'>
                <h1> Gaby Vazquez </h1>
                <ul>
                    <li className='currentPage'>About</li>
                    <li>Projects</li>
                    <li>Resume and References</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='mainBody'>
                <div className='intro'>
                    <img src={require('../static/img/mainPicture.jpeg')} height={400} alt='A picture of me :)' />
                    <h2>Hi, I'm Gaby! <br/> Software Developer </h2>
                </div>
                <div className='main'>
                    <p>
                        Hi, by now you might've guested that my name, is Gaby. Nice to virtually meet you! 
                        Before I get to the my skills and all that jazz, let me tell you a bit more about 
                        myself. <br/>
                        I was born all the way in Anchorage, Alaska and stayed there until my family and I moved
                        to Las Vegas, Nevada back in 2004. Since then, I've spent my time here going to school, working, and now 
                        and working on coding projects.
                        When I'm not working or doing projects, you can catch me in the kitchen cooking up anything 
                        from my comfort meals I grew up with to a new recipe that is way out of my expertise. Another
                        fun fact about me is that I am embarrassingly proud of my island in Animal Crossing. Not the 
                        biggest achievement, but an achievement nonetheless. I think the best way to describe me in general,
                        is just an old lady at heart. As a 22-year-old, I feel like it's rare that all I want to do is be in my cozy 
                        bed no later than 10pm, and have a nice movie night in with my cute little cats. Oh, I'm also a cat mom - I love 
                        those trouble makers. Other than that, I'd love to get to know a bit more about you so feel free to add me on any 
                        of my links or send me an email located in the "Contact" tab! Thanks for stopping by!
                    </p>
                    <div className='photoGal'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
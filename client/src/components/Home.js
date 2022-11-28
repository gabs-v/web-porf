import React from 'react'
import '../static/css/Home.css'

const Home = () => {
    return ( 
        <div className='all'>
            <div className='header'>
                <h1> Gaby Vazquez </h1>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills and Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='mainPage'>
                <div className='leftArea'>
                    <image className='image'/>
                </div>
                <div className='rightArea'>
                    Hi, I'm <br/> Gaby Vazquez. <br/>
                    Nice to meet you!
                </div>
            </div>
        </div>
    )
}

export default Home
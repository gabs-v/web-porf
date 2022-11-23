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
                        Hi, my name is Gabriela but feel free to call my Gaby!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import '../static/css/Home.css'

const Home = () => {
    return ( 
        <div>
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
                <img src={require('../static/img/F03C5768-F3A6-485F-91C6-C76AA6FDC293.jpg')} height={400} />
            </div>
        </div>
    )
}

export default Home
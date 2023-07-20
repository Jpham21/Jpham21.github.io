import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import { Loader } from 'react-loaders';


const Home= () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J', 'o', 'e', 'y', ' ', 'P', 'h', 'a', 'm']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v']
    
    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')}, 4000)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={24} />
                    </h1>
                    <h2>Software Developer / AI Engineer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
             </div>
                <Loader type="pacman" />
             </>
    );
}

export default Home
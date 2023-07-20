import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')}, 3000)
    }, [])
    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1> 
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                   
                </h1>
                <p>I am a very ambitious developer looking for a role in   
                    an established company with the opportunity to grow and work 
                    with the latest technologies. I am a fast learner and a team player.
                </p>
                <p>I am dedicated to staying up-to-date with emerging technologies and 
                    industry best practices. By completing online courses and engaging in personal projects, I continually expand my skill 
                    set and bring fresh ideas to my work. I thrive in fast-paced, dynamic
                    environments where innovation and continuous improvement are highly valued.
                    </p>
                <p>If I needed to define myself in a couple sentences that would be a family person, a sport fanatic,
                    gym rat, and a passionate developer. I am a very competitive person and I love to win!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#4584B6' />
                    </div>
                </div>
            </div>
        </div>  
        <Loader type="pacman" />
        </> 
    )

}

export default About
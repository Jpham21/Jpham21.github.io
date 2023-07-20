import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { Loader } from 'react-loaders';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, TileLayer} from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')}, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs 
            .sendForm(
                'service_aybohz4',
                'template_06y0ib6',
                refForm.current,
                'ixTW1q-0xUCMsuMYZ'
            )
            .then (
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send!')
                }
            )
    }
    return (
      <>
      <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t', ' ', 'm','e']}
                idx={15}
                />
            </h1>
            <p>
                I am always interested in new opportunities - especially ambitous or large projects,
                 so feel free to contact me if you have any questions or just want to say hi!
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'> 
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                        <li className='half'> 
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input placeholder='Subject' type="text" name="subject" required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send" />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        <div className='map-wrap'>
                <MapContainer center={[34.365981244485916, -89.53756876109567]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[34.365981244485916, -89.53756876109567]} />
                </MapContainer>

            </div>
      </div>
      <Loader type="pacman" />
      </>  
    )
}

export default Contact
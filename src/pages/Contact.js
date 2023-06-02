import React from 'react'
import './Contact.css'
import { BsDiscord, BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <div className='contactContainerBg'>
            <div className='contactContainer'>
                <div className='contactIcons'>
                    <Link to='https://wa.me/5531997915854'><BsWhatsapp className='wp' /></Link>
                    <Link to='https://github.com/santanafx'><BsGithub className='gh' /></Link>
                    <Link to='https://discordapp.com/users/254746660549296128'><BsDiscord className='dis' /></Link>
                    <Link to='https://www.linkedin.com/in/lucas-santana-figueiredo-907436115/'><BsLinkedin className='lin' /></Link>
                </div>
                <small className='contactAutor'>&copy; Copyright 2023, Lucas Santana Figueiredo</small>
            </div>
        </div>
    )
}

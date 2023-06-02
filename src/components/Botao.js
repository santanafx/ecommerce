import React from 'react'
import './Botao.css'
import { useNavigate } from 'react-router-dom'

export const Botao = ({ text, setActive, active }) => {

    const navigate = useNavigate();

    return (
        <button onClick={() => { navigate('./checkout'); setActive(!active) }} className='botao'>{text}</button>
    )
}

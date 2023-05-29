import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Inicio = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/produto/sapato')
    }
    return (
        <>
            <button onClick={() => { handleClick() }}>Produto 1</button>
        </>
    )
}

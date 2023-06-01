import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Inicio = () => {

    const navigate = useNavigate();

    const handleClickProd1 = () => {
        navigate('/produto/fallLimited')
    }
    const handleClickProd2 = () => {
        navigate('/produto/xtry')
    }
    const handleClickProd3 = () => {
        navigate('/produto/kolosh')
    }
    return (
        <>
            <button onClick={() => { handleClickProd1() }}>Produto 1</button>
            <button onClick={() => { handleClickProd2() }}>Produto 2</button>
            <button onClick={() => { handleClickProd3() }}>Produto 3</button>
        </>
    )
}

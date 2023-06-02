import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'
import { Context } from '../context/globalContext'
import { ItemVitrine } from '../components/ItemVitrine'

export const Inicio = () => {

    const { dataBase } = React.useContext(Context);

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
        <div className='inicioContainerBg'>
            <div className='inicioContainer'>
                {dataBase.map((element) => (<ItemVitrine key={element.id + element.categoria} img1={element.img1} id={element.id} />))}
                {/* <button onClick={() => { handleClickProd1() }}>Produto 1</button>
                <button onClick={() => { handleClickProd2() }}>Produto 2</button>
                <button onClick={() => { handleClickProd3() }}>Produto 3</button> */}
            </div>
        </div>
    )
}

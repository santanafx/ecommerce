import React from 'react'
import './Inicio.css'
import { Context } from '../context/globalContext'
import { ItemVitrine } from '../components/ItemVitrine'

export const Inicio = () => {

    const { dataBase } = React.useContext(Context);

    return (
        <div className='inicioContainerBg'>
            <div className='inicioContainer'>
                {dataBase.map((element) => (<ItemVitrine key={element.id + element.categoria} img1={element.img1} id={element.id} edicao={element.edicao} preco={element.preco} desconto={element.desconto} />))}
            </div>
        </div>
    )
}

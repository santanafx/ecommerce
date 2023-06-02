import React from 'react'
import './Women.css'
import { Context } from '../context/globalContext'
import { ItemVitrine } from '../components/ItemVitrine'

export const Women = () => {

    const { dataBase } = React.useContext(Context);

    return (
        <div className='womenContainerBg'>
            <div className='womenContainer'>
                {dataBase.filter((element) => element.categoria === 'women').map((element) => (<ItemVitrine key={element.id + element.categoria} img1={element.img1} id={element.id} edicao={element.edicao} preco={element.preco} desconto={element.desconto} />))}
            </div>
        </div>
    )
}
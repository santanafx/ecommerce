import React from 'react'
import './Men.css'
import { Context } from '../context/globalContext'
import { ItemVitrine } from '../components/ItemVitrine'

export const Men = () => {

    const { dataBase } = React.useContext(Context);

    return (
        <div className='menContainerBg'>
            <div className='menContainer'>
                {dataBase.filter((element) => element.categoria === 'men').map((element) => (<ItemVitrine key={element.id + element.categoria} img1={element.img1} id={element.id} edicao={element.edicao} preco={element.preco} desconto={element.desconto} />))}
            </div>
        </div>
    )
}

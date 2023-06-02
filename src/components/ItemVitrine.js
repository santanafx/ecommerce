import React from 'react'
import './ItemVitrine.css'
import { useNavigate } from 'react-router-dom';

export const ItemVitrine = ({ img1, id, edicao, preco, desconto }) => {
    const navigate = useNavigate();

    return (
        <div className='itemVitrineContainer'>
            <img onClick={() => navigate(`./produto/${id}`)} src={img1} alt="Imagem produto." />
            <h3>{edicao}</h3>
            <h4>${(preco * desconto) / 100}</h4>
            <h5>${preco}</h5>
            <span>{desconto}% discount</span>
        </div>
    )
}

import React from 'react'
import './ItemVitrine.css'
import { useNavigate } from 'react-router-dom';

export const ItemVitrine = ({ img1, id }) => {
    const navigate = useNavigate();

    return (
        <div>
            <img onClick={() => navigate(`./produto/${id}`)} src={img1} alt="Imagem produto." />
        </div>
    )
}

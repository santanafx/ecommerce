import React from 'react'
import './Item.css'
import iconDelete from '../images/icon-delete.svg'

export const Item = ({ quantidade, tn, edicao, preco, desconto }) => {

    const precoComDesconto = (parseFloat(preco * desconto) / 100).toFixed(2);

    let precoFinal = parseFloat(precoComDesconto * quantidade).toFixed(2);

    return (
        <div className='DropDownMenuCarrinhoImg'>
            <img className="DropDownMenuCarrinhoImgTn" src={tn} alt="" />
            <div className='DropDownMenuCarrinhoText'>
                <h3>{edicao}</h3>
                <h3>{`$${precoComDesconto} x ${quantidade} `}<b style={{ color: 'black' }}>{`$${precoFinal}`}</b></h3>
            </div>
            <img className="DropDownMenuCarrinhoDelete" src={iconDelete} alt="Icone de deletar item do carrinho." />
        </div>
    )
}

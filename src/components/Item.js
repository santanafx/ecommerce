import React from 'react'
import './Item.css'
import iconDelete from '../images/icon-delete.svg'
import { Context } from '../context/globalContext';

export const Item = ({ quantidade, tn, edicao, preco, desconto, id }) => {

    const precoComDesconto = (parseFloat(preco * desconto) / 100).toFixed(2);

    const { itensCarrinho, setItensCarrinho } = React.useContext(Context);

    let precoFinal = parseFloat(precoComDesconto * quantidade).toFixed(2);

    const handleDelete = () => {
        let novoArray = [];
        itensCarrinho.forEach((element) => {
            if (element.id !== id) {
                novoArray = [...novoArray, element]
            }
        })
        setItensCarrinho(novoArray);
    }

    return (
        <div className='DropDownMenuCarrinhoImg'>
            <img className="DropDownMenuCarrinhoImgTn" src={tn} alt="" />
            <div className='DropDownMenuCarrinhoText'>
                <h3>{edicao}</h3>
                <h3>{`$${precoComDesconto} x ${quantidade} `}<b style={{ color: 'black' }}>{`$${precoFinal}`}</b></h3>
            </div>
            <img onClick={() => (handleDelete())} className="DropDownMenuCarrinhoDelete" src={iconDelete} alt="Icone de deletar item do carrinho." />
        </div>
    )
}

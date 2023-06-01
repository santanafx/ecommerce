import React from 'react'
import './Item.css'
import iconDelete from '../images/icon-delete.svg'
import { Context } from '../context/globalContext';
import { Modal } from './Modal';

export const Item = ({ quantidade, tn1, tn2, tn3, tn4, img1, img2, img3, img4, edicao, preco, desconto, id }) => {

    const precoComDesconto = (parseFloat(preco * desconto) / 100).toFixed(2);

    const { itensCarrinho, setItensCarrinho } = React.useContext(Context);

    const [active, setActive] = React.useState(false);

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
            <img onClick={() => { setActive(!active) }} className="DropDownMenuCarrinhoImgTn" src={tn1} alt="" />
            <div className='DropDownMenuCarrinhoText'>
                <h3>{edicao}</h3>
                <h3>{`$${precoComDesconto} x ${quantidade} `}<b style={{ color: 'black' }}>{`$${precoFinal}`}</b></h3>
            </div>
            <img onClick={() => (handleDelete())} className="DropDownMenuCarrinhoDelete" src={iconDelete} alt="Icone de deletar item do carrinho." />
            <Modal active={active} setActive={setActive} tn1={tn1} tn2={tn2} tn3={tn3} tn4={tn4} img1={img1} img2={img2} img3={img3} img4={img4} />
        </div>
    )
}

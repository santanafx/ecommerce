import React, { useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'

import avatar from '../images/image-avatar.png'
import { Context } from '../context/globalContext'
import { Botao } from './Botao'
import { Item } from './Item'

export const NavBar = () => {

    const { itensCarrinho, produtoSelecionado, attCart } = useContext(Context);
    const [active, setActive] = React.useState(false);
    const [quantidadeCompras, setQuantidadeCompras] = React.useState();
    // const [copyItensCarrinho, setCopyItensCarrinho] = React.useState();


    React.useEffect(() => {
        let itensTotais = 0;
        // setCopyItensCarrinho(itensCarrinho);
        itensCarrinho.forEach((element) => (
            itensTotais = itensTotais + element.quantidade))
        setQuantidadeCompras(itensTotais);
        // console.log(itensCarrinho)
        // console.log(quantidadeCompras)

    }, [attCart, itensCarrinho])

    const handleClickCart = () => {
        setActive(!active);
        console.log(active)
    }

    const handleClickProfile = () => {
        console.log('Clicou profile')
    }
    return (
        <section className='navBarContainerBg'>
            {/* {console.log(copyItensCarrinho)} */}
            <nav className='navBarContainer'>
                <div className="navBarLogo">
                    <img src={logo} alt="Logo do site" />
                </div>
                <div className='navBarMenu'>
                    <div><Link to='/'>Collections</Link></div>
                    <div><Link to='/'>Men</Link></div>
                    <div><Link to='/'>Women</Link></div>
                    <div><Link to='/'>About</Link></div>
                    <div><Link to='/'>Contact</Link></div>
                </div>
                <div className='navBarUsuario'>
                    <div className='navBarUsuarioCarrinho'>
                        <img onClick={() => { handleClickCart() }} src={cart} alt="Carrinho de compras" />
                        {quantidadeCompras !== 0 ? <span>{quantidadeCompras}</span> : ''}
                        <div className={active ? 'navBarUsuarioCarrinhoDropDownMenu' : 'navBarUsuarioCarrinhoDropDownMenuDes'}>
                            <h4>Cart</h4>
                            <hr style={{ color: 'var(--cinza)' }} />
                            {quantidadeCompras > 0 ?
                                <div>
                                    {itensCarrinho.map((element) => (
                                        <Item key={element.id} id={element.id} quantidade={element.quantidade} tn={element.imgTn1} edicao={element.edicao} preco={element.preco} desconto={element.desconto} />
                                    ))}
                                    <div className="DropDownMenuBotao">
                                        <Botao text={'Checkout'} />
                                    </div>
                                </div>
                                : <div className='dropDownCartEmpty'>Your cart is empty.</div>}

                        </div>
                    </div>
                    <img className='navBarUsuarioAvatar' onClick={() => { handleClickProfile() }} src={avatar} alt="Avatar" />
                </div>
            </nav>
        </section >
    )
}

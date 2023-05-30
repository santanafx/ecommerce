import React, { useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import iconDelete from '../images/icon-delete.svg'
import avatar from '../images/image-avatar.png'
import { Context } from '../context/globalContext'
import { Botao } from './Botao'
// import { Item } from './Item'

export const NavBar = () => {

    const { itensCarrinho, produtoSelecionado } = useContext(Context);
    const [active, setActive] = React.useState(false);

    const precoComDesconto = (parseFloat(produtoSelecionado.preco * produtoSelecionado.desconto) / 100).toFixed(2);
    let precoFinal = parseFloat(precoComDesconto * itensCarrinho).toFixed(2);


    React.useEffect(() => {
        console.log(itensCarrinho)

    }, [itensCarrinho])

    const handleClickCart = () => {
        setActive(!active);
        console.log(active)
    }

    const handleClickProfile = () => {
        console.log('Clicou profile')
    }
    return (
        <section className='navBarContainerBg'>
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
                        {itensCarrinho !== 0 && itensCarrinho !== '' ? <span>{itensCarrinho}</span> : ''}


                        {active ? <div className='navBarUsuarioCarrinhoDropDownMenu'>
                            <h4>Cart</h4>
                            <hr style={{ color: 'var(--cinza)' }} />
                            <div className='DropDownMenuCarrinhoImg'>
                                <img className="DropDownMenuCarrinhoImgTn" src={produtoSelecionado.imgTn1} alt="" />
                                <div className='DropDownMenuCarrinhoText'>
                                    <h3>{produtoSelecionado.edicao}</h3>
                                    <h3>{`$${precoComDesconto} x ${itensCarrinho} `}<b style={{ color: 'black' }}>{`$${precoFinal}`}</b></h3>
                                </div>
                                <img className="DropDownMenuCarrinhoDelete" src={iconDelete} alt="Icone de deletar item do carrinho." />
                            </div>
                            {/* {Array.forEach((element)=>{<Item key={element.id} prop1={element.x}/>})} */}
                            <div className="DropDownMenuBotao">
                                <Botao text={'Checkout'} />
                            </div>
                        </div> : ''}
                    </div>
                    <img className='navBarUsuarioAvatar' onClick={() => { handleClickProfile() }} src={avatar} alt="Avatar" />
                </div>
            </nav>
        </section>
    )
}

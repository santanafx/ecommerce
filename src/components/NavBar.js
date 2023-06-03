import React, { useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import menu from '../images/icon-menu.svg'
import avatar from '../images/image-avatar.png'
import close from '../images/icon-close.svg'
import { Context } from '../context/globalContext'
import { Botao } from './Botao'
import { Item } from './Item'

export const NavBar = () => {

    const { itensCarrinho, attCart } = useContext(Context);
    const [active, setActive] = React.useState(false);
    const [menuActive, setMenuActive] = React.useState(false);
    const [quantidadeCompras, setQuantidadeCompras] = React.useState();

    React.useEffect(() => {
        let itensTotais = 0;
        itensCarrinho.forEach((element) => (
            itensTotais = itensTotais + element.quantidade))
        setQuantidadeCompras(itensTotais);


    }, [attCart, itensCarrinho])


    const handleClickProfile = () => {
        console.log('Clicou profile')
    }
    return (
        <section className='navBarContainerBg'>
            <nav className='navBarContainer'>
                <div className='navBarMenuDropDown' >
                    <img onClick={() => setMenuActive(!menuActive)} src={menu} alt="Icone de menu." />
                    <div className={menuActive ? 'navBarMenuDropDownAct' : 'navBarMenuDropDownDes'}>
                        <div><img onClick={() => setMenuActive(!menuActive)} src={close} alt="Icone de fechar menu." /></div>
                        <div><Link to='/'>Collections</Link></div>
                        <div><Link to='/men'>Men</Link></div>
                        <div><Link to='/women'>Women</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div><Link to='/contact'>Contact</Link></div>
                    </div>
                </div>
                <div className="navBarLogo">
                    <img src={logo} alt="Logo do site" />
                </div>
                <div className='navBarMenu'>
                    <div><Link to='/'>Collections</Link></div>
                    <div><Link to='/men'>Men</Link></div>
                    <div><Link to='/women'>Women</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/contact'>Contact</Link></div>
                </div>
                <div className='navBarUsuario'>
                    <div className='navBarUsuarioCarrinho'>
                        <img onClick={() => setActive(!active)} src={cart} alt="Carrinho de compras" />
                        {quantidadeCompras !== 0 ? <span>{quantidadeCompras}</span> : ''}
                        <div className={active ? 'navBarUsuarioCarrinhoDropDownMenuAct' : 'navBarUsuarioCarrinhoDropDownMenuDes'}>
                            <h4>Cart</h4>
                            <hr style={{ color: 'var(--cinza)' }} />
                            {quantidadeCompras > 0 ?
                                <div>
                                    {itensCarrinho.map((element) => (
                                        <Item key={element.id} id={element.id} quantidade={element.quantidade} tn1={element.imgTn1} tn2={element.imgTn2} tn3={element.imgTn3} tn4={element.imgTn4} img1={element.img1} img2={element.img2} img3={element.img3} img4={element.img4} edicao={element.edicao} preco={element.preco} desconto={element.desconto} />
                                    ))}
                                    <div className="DropDownMenuBotao">
                                        <Botao text={'Checkout'} setActive={setActive} active={active} />
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

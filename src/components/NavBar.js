import React, { useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'
import { Context } from '../context/globalContext'

export const NavBar = () => {

    const { itensCarrinho } = useContext(Context);

    React.useEffect(() => {
        console.log(itensCarrinho)
    }, [itensCarrinho])

    const handleClickCart = () => {
        console.log('Clicou carrinho')
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
                    <img onClick={() => { handleClickCart() }} src={cart} alt="Carrinho de compras" />
                    <img onClick={() => { handleClickProfile() }} src={avatar} alt="Avatar" />
                </div>
            </nav>
        </section>
    )
}

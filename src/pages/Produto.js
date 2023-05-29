import React from 'react'
import './Produto.css'
import { useParams } from 'react-router-dom'
import { Context } from '../context/globalContext'
import cart from '../images/icon-cart.svg'

export const Produto = () => {

    const { dataBase } = React.useContext(Context);
    const [produtoSelecionado, setProdutoSelecionado] = React.useState('');
    const [selectImg, setSelectImg] = React.useState('');
    const [counter, setCounter] = React.useState(0);
    const params = useParams();

    React.useEffect(() => {
        dataBase.forEach((element) => {
            if (element.id === params.id) {
                setProdutoSelecionado(element);
                setSelectImg(element.img1)
            }
        })
    }, [])

    const handleChangeImg = (event) => {
        setSelectImg(event);
    }

    const handleCounterAdd = () => {
        setCounter(counter + 1);
    }

    const handleCounterSub = () => {
        setCounter(counter - 1);
    }

    return (
        <section className='produtoContainerBg'>
            <div className='produtoContainer'>
                {console.log(produtoSelecionado)}
                <div className='produtoImgs'>
                    <div className='produtoImgsMain'>
                        <img src={selectImg} alt="Imagem do produto" />
                    </div>
                    <div className='produtoImgsTn'>
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img1} src={produtoSelecionado.imgTn1} alt="Imagem thumbnail do produto" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img2} src={produtoSelecionado.imgTn2} alt="Imagem thumbnail do produto" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img3} src={produtoSelecionado.imgTn3} alt="Imagem thumbnail do produto" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img4} src={produtoSelecionado.imgTn4} alt="Imagem thumbnail do produto" />
                    </div>
                </div>
                <div className='produtoDescricao'>
                    <h3>SNEAKER COMPANY</h3>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <span>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstang everything the weather can offer.</span>
                    <div>
                        <h2>$125.00</h2>
                        <span>50%</span>
                    </div>
                    <h4>$250.00</h4>
                    <div>
                        <button onClick={() => handleCounterSub()}>-</button>
                        <input type="text" disabled value={counter} />
                        <button onClick={() => handleCounterAdd()}>+</button>
                    </div>
                    <button><img src={cart} /> Add to cart</button>
                </div>
            </div>
        </section>
    )
}

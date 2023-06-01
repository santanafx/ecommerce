import React from 'react'
import './Produto.css'
import { useParams } from 'react-router-dom'
import { Context } from '../context/globalContext'
import cart from '../images/icon-cart-copy.png'


export const Produto = () => {

    const { dataBase, setItensCarrinho, itensCarrinho, produtoSelecionado, setProdutoSelecionado, attCart, setAttCart } = React.useContext(Context);

    const [selectImg, setSelectImg] = React.useState('');
    const [counter, setCounter] = React.useState(0);
    const params = useParams();

    const precoComDesconto = (parseFloat(produtoSelecionado.preco * produtoSelecionado.desconto) / 100).toFixed(2);

    React.useEffect(() => {
        dataBase.forEach((element) => {
            if (element.id === params.id) {
                console.log(element.id)
                console.log(params.id)
                setProdutoSelecionado(element);
                setSelectImg(element.img1)
            }

        })
    }, [itensCarrinho])

    const handleChangeImg = (event) => {
        setSelectImg(event);
    }

    const handleCounterAdd = () => {
        setCounter(counter + 1);
    }

    const handleCounterSub = () => {
        setCounter(counter - 1);
        if (counter <= 0) {
            setCounter(0)
        }
    }

    const handleAddCarrinho = () => {
        setAttCart(!attCart);
        let achouProduto = false;
        let attCarrinho = itensCarrinho;
        //Atualiza quantidade no estado global no produto selecionado
        let produtoCopy = produtoSelecionado;
        produtoCopy.quantidade = counter;
        setProdutoSelecionado(produtoCopy);

        attCarrinho.forEach((element) => {
            if (element.id === produtoSelecionado.id) {
                achouProduto = true;
                element = produtoSelecionado;
            }

        })

        if (attCarrinho !== undefined && attCarrinho.length !== 0 && attCarrinho[0].id === '') {
            attCarrinho.shift();
        }

        setItensCarrinho(attCarrinho);

        if (achouProduto === false) {
            setItensCarrinho([...itensCarrinho, produtoSelecionado]);
        }
    }

    return (
        <section className='produtoContainerBg'>
            <div className='produtoContainer'>
                <div className='produtoImgs'>
                    <div className='produtoImgsMain'>
                        <img src={selectImg} alt="Imagem do produto" />
                    </div>
                    <div className='produtoImgsTn'>
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img1} tabIndex="0" src={produtoSelecionado.imgTn1} alt="Imagem thumbnail do produto" />
                        <img tabIndex="1" onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img2} src={produtoSelecionado.imgTn2} alt="Imagem thumbnail do produto" />
                        <img tabIndex="2" onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img3} src={produtoSelecionado.imgTn3} alt="Imagem thumbnail do produto" />
                        <img tabIndex="3" onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img4} src={produtoSelecionado.imgTn4} alt="Imagem thumbnail do produto" />
                    </div>
                </div>
                <div className='produtoDescricao'>
                    <h3>SNEAKER COMPANY</h3>
                    <h1>{produtoSelecionado.edicao}</h1>
                    <span className='produtoDescricaoText'>{produtoSelecionado.descricao}</span>
                    <div className='produtoDescricaoDescContainer'>
                        <h2>{`$${precoComDesconto}`}</h2>
                        <span className='produtoDescricaoDesc'>{`${produtoSelecionado.desconto}%`}</span>
                    </div>
                    <h4>{`$${parseFloat(produtoSelecionado.preco).toFixed(2)}`}</h4>
                    <div className='produtoDescricaoMaisMenosContainer'>
                        <div className="produtoDescricaoMaisMenos">
                            <button onClick={() => handleCounterSub()}>-</button>
                            <input type="text" disabled value={counter} />
                            <button onClick={() => handleCounterAdd()}>+</button>
                        </div>
                        <button onClick={() => { handleAddCarrinho() }} className='produtoDescricaoAddCar'><img src={cart} alt="Imagem do carrinho" /> Add to cart</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

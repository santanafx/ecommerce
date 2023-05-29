import React from 'react'
import './Produto.css'
import { useParams } from 'react-router-dom'
import { Context } from '../context/globalContext'

export const Produto = () => {

    const { dataBase } = React.useContext(Context);
    const [produtoSelecionado, setProdutoSelecionado] = React.useState('');
    const [selectImg, setSelectImg] = React.useState('');
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

    return (
        <section className='produtoContainerBg'>
            <div className='produtoContainer'>
                {console.log(produtoSelecionado)}
                <div className='produtoImgs'>
                    <div>
                        <img src={selectImg} alt="" />
                    </div>
                    <div>
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img1} src={produtoSelecionado.imgTn1} alt="" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img2} src={produtoSelecionado.imgTn2} alt="" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img3} src={produtoSelecionado.imgTn3} alt="" />
                        <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} picture={produtoSelecionado.img4} src={produtoSelecionado.imgTn4} alt="" />
                    </div>
                </div>
                <div className='produtoDescricao'>
                    bloco2
                </div>
            </div>
        </section>
    )
}

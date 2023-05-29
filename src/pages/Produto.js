import React from 'react'
import './Produto.css'
import { useParams } from 'react-router-dom'
import { Context } from '../context/globalContext'

export const Produto = () => {

    const { dataBase } = React.useContext(Context);
    const [produtoSelecionado, setProdutoSelecionado] = React.useState('');
    const params = useParams();

    React.useEffect(() => {
        dataBase.forEach((element) => {
            if (element.id === params.id) {

                setProdutoSelecionado(element);

            }
        })
    }, [])

    return (
        <section className='produtoContainerBg'>
            <div className='produtoContainer'>
                <div>
                    {console.log(produtoSelecionado)}
                    <h1>Produto: {params.id}</h1>
                    <img src={produtoSelecionado.img1} alt="" />
                </div>
                <div>
                    bloco2
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import fallLimited1 from '../images/product-1/image-product-1.jpg'
import fallLimited2 from '../images/product-1/image-product-2.jpg'
import fallLimited3 from '../images/product-1/image-product-3.jpg'
import fallLimited4 from '../images/product-1/image-product-4.jpg'
import xtry1 from '../images/product-2/image-product-1.png'
import xtry2 from '../images/product-2/image-product-2.png'
import xtry3 from '../images/product-2/image-product-3.png'
import xtry4 from '../images/product-2/image-product-4.png'
import kolosh1 from '../images/product-3/image-product-1.png'
import kolosh2 from '../images/product-3/image-product-2.png'
import kolosh3 from '../images/product-3/image-product-3.png'
import kolosh4 from '../images/product-3/image-product-4.png'

import fallLimited1Tn from '../images/product-1/image-product-1-thumbnail.jpg'
import fallLimited2Tn from '../images/product-1/image-product-2-thumbnail.jpg'
import fallLimited3Tn from '../images/product-1/image-product-3-thumbnail.jpg'
import fallLimited4Tn from '../images/product-1/image-product-4-thumbnail.jpg'
import xtry1Tn from '../images/product-2/image-product-1-thumbnail.png'
import xtry2Tn from '../images/product-2/image-product-2-thumbnail.png'
import xtry3Tn from '../images/product-2/image-product-3-thumbnail.png'
import xtry4Tn from '../images/product-2/image-product-4-thumbnail.png'
import kolosh1Tn from '../images/product-3/image-product-1-thumbnail.png'
import kolosh2Tn from '../images/product-3/image-product-2-thumbnail.png'
import kolosh3Tn from '../images/product-3/image-product-3-thumbnail.png'
import kolosh4Tn from '../images/product-3/image-product-4-thumbnail.png'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const [dataBase, setDataBase] = React.useState([
        {
            id: 'fallLimited',
            edicao: 'Fall Limited Edition Sneakers',
            descricao: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstang everything the weather can offer.',
            img1: fallLimited1,
            img2: fallLimited2,
            img3: fallLimited3,
            img4: fallLimited4,
            imgTn1: fallLimited1Tn,
            imgTn2: fallLimited2Tn,
            imgTn3: fallLimited3Tn,
            imgTn4: fallLimited4Tn,
            preco: 250,
            desconto: 50,
            quantidade: 0,
        },
        {
            id: 'xtry',
            edicao: 'X-TRY',
            descricao: 'Wholesale Custom Stylish Woman Casual Breathable Mesh Fly Knit Fashion Tennis Athletic Running Walking Sport Sneaker Trainer Shoes',
            img1: xtry1,
            img2: xtry2,
            img3: xtry3,
            img4: xtry4,
            imgTn1: xtry1Tn,
            imgTn2: xtry2Tn,
            imgTn3: xtry3Tn,
            imgTn4: xtry4Tn,
            preco: 400,
            desconto: 50,
            quantidade: 0,
        },
        {
            id: 'kolosh',
            edicao: 'Kolosh',
            descricao: 'New arrivals black woman flat shoes sneakers fashionable',
            img1: kolosh1,
            img2: kolosh2,
            img3: kolosh3,
            img4: kolosh4,
            imgTn1: kolosh1Tn,
            imgTn2: kolosh2Tn,
            imgTn3: kolosh3Tn,
            imgTn4: kolosh4Tn,
            preco: 100,
            desconto: 50,
            quantidade: 0,
        },
    ]);

    const [itensCarrinho, setItensCarrinho] = React.useState([{
        id: '',
        edicao: '',
        descricao: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        imgTn1: '',
        imgTn2: '',
        imgTn3: '',
        imgTn4: '',
        preco: '',
        desconto: '',
        quantidade: 0,
    },]);
    const [produtoSelecionado, setProdutoSelecionado] = React.useState('');

    const [attCart, setAttCart] = React.useState(false);

    return (<Context.Provider value={{ dataBase, setDataBase, itensCarrinho, setItensCarrinho, produtoSelecionado, setProdutoSelecionado, attCart, setAttCart }}>
        {children}
    </Context.Provider>

    );
}
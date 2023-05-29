import React from 'react'
import imageSapato1 from '../images/product-1/image-product-1.jpg'
import imageSapato2 from '../images/product-1/image-product-2.jpg'
import imageSapato3 from '../images/product-1/image-product-3.jpg'
import imageSapato4 from '../images/product-1/image-product-4.jpg'

import imageSapato1Tn from '../images/product-1/image-product-1-thumbnail.jpg'
import imageSapato2Tn from '../images/product-1/image-product-2-thumbnail.jpg'
import imageSapato3Tn from '../images/product-1/image-product-3-thumbnail.jpg'
import imageSapato4Tn from '../images/product-1/image-product-4-thumbnail.jpg'

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const [dataBase, setDataBase] = React.useState([
        {
            id: 'sapato',
            img1: imageSapato1,
            img2: imageSapato2,
            img3: imageSapato3,
            img4: imageSapato4,
            imgTn1: imageSapato1Tn,
            imgTn2: imageSapato2Tn,
            imgTn3: imageSapato3Tn,
            imgTn4: imageSapato4Tn,
        },
    ]);

    return (<Context.Provider value={{ dataBase }}>
        {children}
    </Context.Provider>

    );
}
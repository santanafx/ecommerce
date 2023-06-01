import React from 'react'
import './Modal.css'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import close from '../images/icon-close.svg'

export const Modal = ({ active, setActive, tn1, tn2, tn3, tn4, img1, img2, img3, img4 }) => {

    const [selectImg, setSelectImg] = React.useState(img1);

    const handleChangeImg = (event) => {
        setSelectImg(event);
    }

    return (
        <>
            {active ? <div className='modalContainerBg'>
                <div className='modalContainer'>
                    <div className='modalImgs'>
                        <div className='modalImgsMain'>
                            <img src={selectImg} alt="" />
                        </div>
                        <div className='modalImgsTn'>
                            <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} src={tn1} alt="" picture={img1} tabIndex="0" />
                            <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} src={tn2} alt="" picture={img2} tabIndex="1" />
                            <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} src={tn3} alt="" picture={img3} tabIndex="2" />
                            <img onClick={(event) => { handleChangeImg(event.target.getAttribute("picture")) }} src={tn4} alt="" picture={img4} tabIndex="3" />
                        </div>
                        <div className='modalNext'></div>
                        <div className='modalPrevious'></div>
                        <div className='modalClose'></div>
                    </div>


                </div>
            </div> : ''}
        </>
    )
}
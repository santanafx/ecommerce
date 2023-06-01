import React from 'react'
import './Modal.css'

export const Modal = ({ active, setActive, tn1, tn2, tn3, tn4, img1, img2, img3, img4 }) => {

    const [selectImg, setSelectImg] = React.useState(img1);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const slider = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

    console.log(selectImg)
    const handleChangeImg = (event) => {
        setSelectImg(event);

    }

    const handleNext = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectImg(slider[newIndex].img);
    }

    const handlePrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectImg(slider[newIndex].img);
    }

    const handleClose = () => {
        setActive(false);
    }

    return (
        <>
            {active ? <div disabled className='modalContainerBg'>
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
                        <div onClick={() => handleNext()} className='modalNext'></div>
                        <div onClick={() => handlePrevious()} className='modalPrevious'></div>
                        <div onClick={() => handleClose()} className='modalClose'></div>
                    </div>


                </div>
            </div> : ''}
        </>
    )
}
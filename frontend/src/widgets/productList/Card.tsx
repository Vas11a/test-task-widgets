import React from 'react'
import s from './prodList.module.scss'
import img from './imgs/img.jpg'
import heart from './imgs/heart.png'

type Product = {
    id: string;
    title: string;
    subTitle: string;
    isAvailable: boolean;
    price: string;
};

type CardPropsType = {
    data: Product
}

const Card:React.FC<CardPropsType> = ({data}) => {
    return (
        <div className={s.card}>
            <img src={heart} />
            <div className={s.imgBlock}>
                <img src={img} alt="ImG" />
            </div>
            <div>
                <div className='d-flex justify-content-between'>
                    <div className='fs-4'>{data.title}</div>
                    <div className='fs-4'>{data.price}</div>
                </div>
                <div>{data.subTitle}</div>
                <div className='d-flex justify-content-between'>
                    <div className={data.isAvailable?s.avalaible:s.notAvalaible}>
                        {data.isAvailable ? 'Avalaible now' : 'Not avalaible'}
                    </div>
                    <div className='d-flex align-items-center'>
                        Compare
                        <input className={s.checkbox} type="checkbox" id="myCheckbox" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

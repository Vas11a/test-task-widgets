import React from 'react'
import rt from './imgs/rt.webp'
import s from './rev.module.scss'
import { ReviewType } from '../../mock-tool/reviews'


const Review: React.FC<{data: ReviewType}> = ({data}) => {

    return (
        <div className="pt-5">
            <div className='fs-2'>{data.name}</div>
            <strong className='pt-2 text-secondary'>{data.data}</strong>
            <div>
                <img src={rt} className={s.imgRt} alt={data.rating} />
            </div>
            <p className=' fs-5 pt-3'>{data.text}</p>
            {
                data.text.length > 300 && <strong style={{cursor: 'pointer'}} className='user-select-all text-uppercase'> <u>Read more</u></strong>
            }
            
        </div>
    )
}

export default Review;

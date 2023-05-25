import React from 'react'
import s from './rev.module.scss'
import { ReviewType } from '../../mock-tool/reviews'

type FormProps = {
    dataSet: React.Dispatch<React.SetStateAction<ReviewType[]>>;
    data: ReviewType[]
}

const Form: React.FC<FormProps> = ({dataSet, data}) => {
    const [phone , setPhone] = React.useState('')
    const [email , setEmail] = React.useState('')
    const [text , setText] = React.useState('')
    const [name , setName] = React.useState('')

    const addReview = () => {
        if (email.replace(/\s+/g, '') === '' || name.replace(/\s+/g, '') === '' || text.replace(/\s+/g, '') === '') {
            alert('Fill in all required fields')
            return
        }
        const obj = {
            name,
            email,
            text,
            phone,
            data: 'todays data',
            rating: '5/5'
        }
        dataSet([...data, obj])
        setPhone('')
        setEmail('')
        setText('')
        setName('')
    }
    return (
        <div className={s.formBlock}>
            <div className="fs-2">Leave a Review</div>
            <div className="formSubTitle">Your email adress will not published. Require fileds are markup*</div>
            <textarea placeholder='Comment *' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <div className={s.groupInp}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name *' />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email *' />
            </div>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone(optional)' />
            <div className="d-flex align-items-center">
                <input type="checkbox" className={s.checkbox} />
                <strong className='pt-2 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, neque.</strong>
            </div>
            <div className="buttonBlock">
                <div onClick={addReview} className={s.button}>Post Review</div>
            </div>
        </div>
    )
}


export default Form;

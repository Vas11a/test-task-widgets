import React from 'react'
import s from './rev.module.scss'
import Review from './Review'
import Form from './Form'
import { ReviewType } from '../../mock-tool/reviews'

type RevBlockProps = {
  data: ReviewType[];
};

const RevBlock:React.FC<RevBlockProps> = ( {data} ) => {
  const [dataArr, setDataArr] = React.useState(data);
  React.useEffect(() => {
    setDataArr(data)
  }, [])

  return (
    <div className={s.wrapper}>
        <div className="revBlock">
            <div className="pb-5">
              {
                dataArr.map((elem, idx) =>  <Review key={idx} data={elem}/>)
              }
                
            </div>
            <div className="pt-4 border-top border-dark">
                <strong style={{cursor: 'pointer'}} className='text-uppercase'> <u>Read all reviews</u></strong>
            </div>
        </div>
        <Form dataSet={setDataArr} data={dataArr}/>
    </div>
  )
}

export default RevBlock;

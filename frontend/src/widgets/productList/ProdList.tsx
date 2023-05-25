import React from 'react'
import s from './prodList.module.scss';
import Card from './Card';
import axios, { AxiosResponse } from 'axios';

type Product = {
  id: string;
  title: string;
  subTitle: string;
  isAvailable: boolean;
  price: string
};

const ProdList:React.FC = () => {
  const [dataArr, setDataArr] = React.useState<Product[]>([]); 
  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3001/products')
      setDataArr(res.data)
    } catch (error) {
      alert('Server error')
    }
  }

  React.useEffect(() => {
    getData()
  }, [])
  return (
   <div className={s.wrapper}>
        <span className='text-uppercase small strong'>hello it is title before text drdr drgs</span>
        <span className='display-4'>Lets get started</span>
        <div className={s.cards}>
            {
              dataArr && dataArr.map(elem => <Card key={elem.id} data={elem}/>)
            }
        </div>
   </div>
  )
}

export default ProdList;

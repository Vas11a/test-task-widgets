import React from 'react'
import { Link } from 'react-router-dom';

const HomePage:React.FC = () => {
  return (
    <div className="containerHome">
        <div className=' display-3'>Choose widget</div>
        <div className="widget-block">
            <Link to='prodList' className='btn btn-lg btn-success'>
                Product List
            </Link>

            <Link to='reviews' className='btn btn-lg btn-success'>
                Reviews
            </Link>
        </div>
    </div>
  )
}

export default HomePage;

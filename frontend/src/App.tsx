import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProdList from './widgets/productList/ProdList';
import HomePage from './HomePage';
import {rewData} from './mock-tool/reviews'
import RevBlock from './widgets/reviews/RevBlock';

const App:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='prodList' element={<ProdList/>}/>
        <Route path='reviews' element={<RevBlock data={rewData}/>}/>
      </Routes>
    </div>
  );
}

export default App;

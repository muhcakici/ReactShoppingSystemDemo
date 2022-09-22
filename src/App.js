import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import Basket from './Components/Basket';
import { useState } from 'react';
import BasketContext from './Context/BasketContext';

function App() {

  const [basket, setBasket] = useState([]);

  const data = {
    basket,
    setBasket
  }


  return (
    <BasketContext.Provider value={data}>
      <div className="App">
        <HeaderComponent />
        <Basket />
      </div>
    </BasketContext.Provider>
  );
}

export default App;

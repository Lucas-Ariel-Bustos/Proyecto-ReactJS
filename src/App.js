import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './Componentes/Context/CartContext';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      isInCart
    }}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='*' element={ <Navigate to="/" /> } />
          {/* <Route path='/Bajos' element={ <ItemListContainer /> }/>
          <Route path='/Cuerdas' element={ <ItemListContainer /> }/> */}

          {/* <ItemDetailContainer /> */}
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}


export default App;

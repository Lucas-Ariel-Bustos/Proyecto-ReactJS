import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Componentes/Context/CartContext';
import { Cart } from './Componentes/Cart/Cart';
import { Checkout } from './Componentes/Checkout/Checkout';

function App() {

  return (
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='*' element={ <Navigate to="/" /> } />
            {/* <Route path='/Bajos' element={ <ItemListContainer /> }/>
            <Route path='/Cuerdas' element={ <ItemListContainer /> }/> */}

            {/* <ItemDetailContainer /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
  );
}


export default App;

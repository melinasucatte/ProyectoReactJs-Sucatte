import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider } from './context/CartContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Order from './components/Order/Order';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/order' element={<Order/>}/>
          </Routes>
        </CartContextProvider>
    </BrowserRouter>

  )
}

export default App

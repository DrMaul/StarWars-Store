import Navbar from './components/Navbar'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/Error404'
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContext'

const App = () => {

  

  return (

    <CartContextProvider>

    

      <BrowserRouter>
        
        <Navbar/>

        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"/cart"} element={<Cart />}/>
          <Route path={"*"} element={<Error404 />}/>

      
        </Routes>

      </BrowserRouter>

    </CartContextProvider>
  )
}

export default App


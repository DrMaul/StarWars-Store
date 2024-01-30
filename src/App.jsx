import Navbar from './components/Navbar'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/Error404'

const App = () => {

  

  return (
    <BrowserRouter>
      
      <Navbar/>

      

      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404 />}/>

    
      </Routes>

    </BrowserRouter>
  )
}

export default App


import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  

  return (
    <div>
      
      <Navbar/>

      <Carrousel/>
      <ItemListContainer greeting={"No se encontraron productos"} />
    </div>
  )
}

export default App


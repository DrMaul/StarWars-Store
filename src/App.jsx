import Header from './components/Header'
import Carrousel from './components/Carrousel'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  

  return (
    <div>
      <Header/>
      <Carrousel/>
      <ItemListContainer greeting={"No se encontraron productos"} />
    </div>
  )
}

export default App


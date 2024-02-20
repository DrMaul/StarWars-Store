import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"


const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(item, cantidad);
  }

    return (
      <div className="container bordes-metalicos">
        <div className="fondo-metalico">
            <div className="row px-2">
                <div className="col-md-5 d-flex justify-content-center">
                    <img src={item.image} alt={item.name} className="img-fluid"/>
                </div>
                <div className="col-md-7 text-center ">
                    <h1>{item.name}</h1>
                    <h2>Precio: ${item.price}</h2>
                    <p>{item.description}</p>
                    <p><b>Categoria: {item.categoria}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
  
  export default ItemDetail
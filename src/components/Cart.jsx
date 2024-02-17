import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const  {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if(CantTotalProductos()==0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No hay productos en carrito!</div>
                        <Link to={"/"} className="btn btn-dark my-4">Volver al inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Mi carrito</h1>
                        <div className="list-group">

                            <div className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    
                                    <h4 className="mb-1">Imagen</h4>
                                    <h4 className="mb-1">Nombre</h4>
                                    <h4 className="mb-1">Precio</h4>
                                    <h4 className="mb-1">Cantidad</h4>
                                    <h4 className="mb-1">Precio Total</h4>
                                    <h4 className="mb-1"></h4>
                                    
                                </div>
                            </div>

                            {cart.map(product =>
                                <div key={product.id} className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <img src={product.image} alt="{product.name}" width={80}/>
                                        <h5 className="mb-1">{product.name}</h5>
                                        <p>{product.price}</p>
                                        <p>{product.quantity}</p>
                                        <p>${product.quantity * product.price}</p>
                                        <a href="#" onClick={()=> {removeItem(product.id)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>
                                        </a>
                                        
                                    </div>
                                </div>
                            )}
                            
                            <div href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h3 className="mb-1">Suma total</h3>
                                    <p className="fw-bold">${SumaTotalProductos()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Cart
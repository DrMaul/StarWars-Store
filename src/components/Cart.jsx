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
                <div className="my-3 bordes-metalicos">
                    <div className="py-3 fondo-metalico">
                        <h1>Mi carrito</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <table className="table table-hover">
                <thead>
                    <tr className="fondo-metalico-borde" >
                        <th scope="col" colSpan={2} className="fondo-metalico-borde text-center align-middle">Producto</th>
                        <th scope="col" className="fondo-metalico-borde">Precio</th>
                        <th scope="col"className="fondo-metalico-borde">Cantidad</th>
                        <th scope="col"className="fondo-metalico-borde">Precio total</th>
                        <th scope="col"className="fondo-metalico-borde">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(product =>
                        <tr key={product.id}>
                            <td scope="col" className="fondo-metalico-borde text-center align-middle"><img src={product.image} alt="{product.name}" width={80}/></td>
                            <td scope="col" className="fondo-metalico-borde align-middle">{product.name}</td>
                            <td scope="col" className="fondo-metalico-borde align-middle">${product.price}</td>
                            <td scope="col" className="fondo-metalico-borde align-middle">{product.quantity}</td>
                            <td scope="col" className="fondo-metalico-borde align-middle">${product.quantity * product.price}</td>
                            <td scope="col" className="fondo-metalico-borde text-center align-middle"><a href="#" onClick={()=> {removeItem(product.id)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                </svg>
                            </a></td>
 
                        </tr>
                    )}
                    <tr>
                        <td scope="col" className="fondo-metalico-borde text-center align-middle" colSpan={2}><h3 className="mb-1">Suma total: ${SumaTotalProductos()}</h3></td>
                        <td scope="col" className="fondo-metalico-borde text-center align-middle" colSpan={2}><button href="#" className="btn btn-danger" onClick={clear}>Vaciar carrito</button></td>
                        <td scope="col" className="fondo-metalico-borde text-center align-middle" colSpan={2}><Link to={"/checkout"} className="btn btn-success"><h5>Ir a pagar</h5></Link></td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cart
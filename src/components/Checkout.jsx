import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import {getFirestore, collection,addDoc} from 'firebase/firestore';

export const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const [errorId, setErrorId] = useState(0);
    const  {cart, SumaTotalProductos, clear} = useContext(CartContext);

    const generarOrden = () => {
        if(cart.length === 0){
            console.log("error: carrito vacio")
            setErrorId("Carrito vacío, intente nuevamente");
            return false;
        }

        if (!nombre || !email || !telefono ) {
            console.log("error: formulario vacio")
            setErrorId("Formulario vacío, intente nuevamente");
            return false;
        }

        

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id: item.idProd, title: item.name, price: item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`; 
        const total = SumaTotalProductos();

        const order = {buyer:buyer, items:items, date:date, total:total};
        console.log(order);
        
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            console.log(resultado);
            clear();
            setOrderId(resultado.id);
            setErrorId(0);
        })

    }



  return (
    <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="my-3 bordes-metalicos">
                            <div className="py-3 fondo-metalico">
                                <h1>Checkout</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="bordes-metalicos">
                    <div className="fondo-metalico">
                        <div className="row p-3">
                            <div className="col">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label"><h4>Nombre</h4></label>
                                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><h4>Email</h4></label>
                                        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><h4>Teléfono</h4></label>
                                        <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                                    </div>
                                    <button type="button" className="btn btn-dark btn-dark-metal" onClick={generarOrden}><h2>Pagar</h2></button>
                                </form>
                            </div>
                            <div className="col">
                            <table className="table table-hover">
                <thead>
                    <tr className="fondo-metalico-borde" >
                        <th scope="col" colSpan={2} className="fondo-metalico-borde text-center align-middle">Producto</th>
                        <th scope="col" className="fondo-metalico-borde">Precio</th>
                        <th scope="col"className="fondo-metalico-borde">Cantidad</th>
                        <th scope="col"className="fondo-metalico-borde">Precio total</th>
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
                        </tr>
                    )}
                    <tr>
                        <td scope="col" className="fondo-metalico-borde text-center align-middle" colSpan={5}><h3 className="mb-1">Suma total: ${SumaTotalProductos()}</h3></td>
                        
                    </tr>
                    
                    
                </tbody>
            </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? 
                            <div className="alert alert-success" role="alert">
                                <h1>Gracias por tu compra!</h1>
                                <h3>Tu ID de compra es: <strong>{orderId}</strong></h3>
                                <Link to={"/"} className="btn btn-dark btn-dark-metal my-4">Volver al inicio</Link>
                            </div>
                        :
                            ""
                        }
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col text-center">
                        {errorId != 0 ? 
                            <div className="alert alert-danger" role="alert">
                                <h1>Error al comprar!</h1>
                                <h3><strong>{errorId}</strong></h3>
                            </div>
                        :
                            ""
                        }
                    </div>
                </div>
                        
                    
                
            </div>
  )
}

import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import {getFirestore, collection,addDoc} from 'firebase/firestore';

export const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const  {cart, CantTotalProductos, SumaTotalProductos, clear} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0 || email.length === 0 || telefono.length === 0 ) {
            console.log(nombre)
            console.log(email)
            console.log(telefono)
            console.log("no tengo datos en formulario")
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
        })

    }

  return (
    <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Checkout</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-dark" onClick={generarOrden}>Pagar</button>
                    </form>
                    </div>
                    <div className="col">
                        <div className="list-group">

                        <div className="list-group-item list-group-item-action fondo-metalico-borde">
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
                            <div key={product.id} className="list-group-item list-group-item-action fondo-metalico-borde">
                                <div className="d-flex w-100 justify-content-between align-items-center">
                                    <img src={product.image} alt="{product.name}" width={80}/>
                                    <h5 className="mb-1">{product.name}</h5>
                                    <p>{product.price}</p>
                                    <p>{product.quantity}</p>
                                    <p>${product.quantity * product.price}</p>
                                    
                                    
                                </div>
                            </div>
                        )}
                        
                        <div href="#" className="list-group-item list-group-item-action fondo-metalico-borde">
                            <div className="d-flex w-100 justify-content-between">
                                <h3 className="mb-1">Suma total</h3>
                                <p className="fw-bold">${SumaTotalProductos()}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                </div>

                <div className="row my-5">
                    <div className="col text-center">
                        {!orderId ? 
                            <div className="alert alert-success" role="alert">
                                <h1>Gracias por tu compra!</h1>
                                <h3>Tu ID de compra es: <strong>{orderId}</strong></h3>
                                <Link to={"/"} className="btn btn-dark my-4">Volver al inicio</Link>
                            </div>
                        :
                            ""
                        }
                    </div>
                </div>
                        
                    
                
            </div>
  )
}

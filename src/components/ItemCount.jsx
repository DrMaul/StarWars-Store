import {useEffect, useState } from "react";
import FondoMetalDark from '../assets/fondometal-dark.jpg'
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAgregado, setItemAgregado] = useState(false);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            onAdd(contador);
            setItemAgregado(true);
        }
    }

    useEffect(()=> {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            <div className="row my-1">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic example" style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
                        <button type="button" className="btn text-white" onClick={decrementar} >-</button>
                        <button type="button" className="btn text-white" >{contador}</button>
                        <button type="button" className="btn text-white" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-12">
                    {itemAgregado ?
                        <Link to={"/cart"} className="btn btn-dark" style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Finalizar compra</Link>
                     :
                     <button type="button" className="btn btn-dark" onClick={addToCart} style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Agregar al Carrito</button>   
                    }
                </div>
            </div>
        </>
    )
}

export default ItemCount;
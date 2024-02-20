import {useEffect, useState } from "react";
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
                    <div className="btn-group btn-dark-metal" role="group" aria-label="Basic example">
                        <button type="button" className="btn text-white" onClick={decrementar} >-</button>
                        <button type="button" className="btn text-white" >{contador}</button>
                        <button type="button" className="btn text-white" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-12">
                    {itemAgregado ?
                        <Link to={"/cart"} className="btn btn-dark btn-dark-metal">Ver carrito</Link>
                     :
                     <button type="button" className="btn btn-dark btn-dark-metal" onClick={addToCart} >Agregar al Carrito</button>   
                    }
                </div>
            </div>
        </>
    )
}

export default ItemCount;
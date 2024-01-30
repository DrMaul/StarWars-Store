import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

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

    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);
            console.log("Se agregaron " + contador + " productos al carrito. Quedan " + (itemStock - contador) + " productos disponibles.");
        }
    }

    useEffect(()=> {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            <div className="row my-1">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-warning">{contador}</button>
                        <button type="button" className="btn btn-warning" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-2">
                    <button type="button" className="btn btn-warning" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;
import { useEffect, useState } from "react";
//import arrayProductos from "../json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /* LLAMADA AL ARCHIVO JSON 
    useEffect(()=> {
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id == id);

                resolve(producto);
            },2000);
            })
        promesa.then(data => {
            setItem(data);
            console.log(data);
        })
    }, [id]) */

    /* LLAMADA DEL PRODUCTO ID DESDE FIRESTORE */
    useEffect(()=> {
        const db = getFirestore();
        const producto = doc(db, "items", id)
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id: resultado.id, ...resultado.data()});
        })

    },[id])

  return (
    <>
        {loading ? <Loading/> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer
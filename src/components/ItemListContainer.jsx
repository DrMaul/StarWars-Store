//import arrayProductos from "../json/productos.json";
import {useState}from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel';
import {getFirestore, collection, query, getDocs, where} from 'firebase/firestore';
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /* LLAMADA AL ARCHIVO JSON 
    useEffect(()=> {
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            },2000);
            })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })
    }, [id]) */

    /* CARGAR PRODUCTOS DESDE JSON A FIRESTORE, collection "items" 
        useEffect(() => {
        const db  = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("los productos se subieron correctamente");

    }, []) */

    /* LLAMADA DE PRODUCTOS DESDE FIRESTORE */
    useEffect(()=> {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id: producto.id, ...producto.data()})));
        })

    },[id])


  return (
    <>
            {id ? "" : <Carrousel/>}
            {loading ? <Loading/> : <ItemList items={items}/>}
            



        
        
        
    </>
    
  )
}

export default ItemListContainer
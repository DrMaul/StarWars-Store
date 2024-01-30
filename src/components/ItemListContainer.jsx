import arrayProductos from "../json/productos.json";
import {useState}from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel'


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

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
    }, [id])


  return (
    <>
            <Carrousel/>
            <ItemList items={items}/>



        
        
        
    </>
    
  )
}

export default ItemListContainer
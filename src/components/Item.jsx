import '../styles/itemStyles.css'
import FondoMetalDark from '../assets/fondometal-dark.jpg'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <div className="col-lg-3 col-6 my-2">
        <div className='bordes-metalicos-item'>
            <div className="card fondo-metalico-item" style={{width: "auto"}}>
                <Link to={"/item/" + item.id}>
                    <img src={item.image} className="card-img-top" alt={item.image}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Categoria: {item.categoria}</li>
                    <li className="list-group-item">Precio: ${item.price} creditos</li>
                </ul>
                <div className="card-body">
                    <Link to={"/item/" + item.id} className="btn btn-dark card-link" style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Ver detalles</Link>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Item
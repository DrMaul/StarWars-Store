import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (

    <div className="col-lg-3 col-6 my-2">
        <div className='bordes-metalicos'>
            <div className="card fondo-metalico" style={{width: "auto", height: "100%"}}>
                <Link to={"/item/" + item.id}>
                    <img src={item.image} style={{borderRadius: "20px 20px 0 0", width:"100%"}} alt={item.image}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item fondo-metalico-borde">Categoria: {item.categoria}</li>
                    <li className="list-group-item fondo-metalico-borde">Precio: ${item.price} creditos</li>
                </ul>
                <div className="card-body text-center">
                    <Link to={"/item/" + item.id} className="btn btn-dark btn-dark-metal" >Ver detalles</Link>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Item
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
      <div className="container my-3">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <img src={item.image} alt={item.name} className="img-fluid"/>
            </div>
            <div className="col-md-6 text-center ">
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
                <p>{item.description}</p>
                <p><b>Categoria: {item.categoria}</b></p>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
      </div>
    )
  }
  
  export default ItemDetail
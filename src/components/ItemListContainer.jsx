
const ItemListContainer = ({greeting}) => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-6 offset-3 text-center">
                <div className="alert alert-danger" role="alert">
                    <div>
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default ItemListContainer
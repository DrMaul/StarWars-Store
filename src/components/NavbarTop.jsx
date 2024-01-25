import SearchBar from "./SearchBar"
import CartWidget from "./CartWidget"

const NavbarTop = () => {
    

  return (
    <div className="row pt-4">

          <div className="col-3 d-flex justify-content-center">
                <a className="navbar-brand " href="">
                    <h2 className="text-danger">Neon GameStore</h2>
                </a>
            </div>

          <div className="col-6 d-flex justify-content-center">
            <SearchBar/>
          </div>
          
          <div className="col-3 d-flex align-items-center justify-content-center">
            <CartWidget/>
            

          </div>

             
        </div>
  )
}

export default NavbarTop
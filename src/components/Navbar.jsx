import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
import Logo from "./Logo"



const Navbar = () => {
    

  return (

    <div className="container-fluid mb-3">
        <div className="row my-3" style={{height: "80px"}}>
          <div className="col-3 d-flex justify-content-center">
            <Logo />
          </div>

          <div className="col-6 d-flex justify-content-center">
            <div className="bordes-metalicos" style={{width:"80%"}}>
              <div className="d-flex justify-content-center fondo-metalico" style={{height: "100%"}}>
              <nav className="navbar navbar-expand-lg " >
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link dropdown-toggle text-danger" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                      </NavLink>
                      <ul className="dropdown-menu fondo-metalico-borde">
                        <li><NavLink className="dropdown-item" to={"/category/naves"}>Naves</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/blasters"}>Blásters</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/droides"}>Droides</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/tecnologia"}>Tecnología</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/curiosidades"}>Curiosidades</NavLink></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/"}>Noticias</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/"}>Contacto</NavLink>
                    </li>
                    
                  </ul>
                </div>
              </nav>
              </div>
              
            </div>
          </div>

          <div className="col-3 d-flex align-items-center justify-content-center">
            <CartWidget/>
          </div>

   
        </div>
        

      </div>
      
  )
}

export default Navbar
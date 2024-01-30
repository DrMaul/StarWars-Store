
import CartWidget from "./CartWidget"
import Logo from "./Logo"

import '../styles/navbarStyles.css';


const Navbar = () => {
    

  return (

    <div className="container-fluid mb-3">
        <div className="row pt-4">

          <div className="col-3 d-flex justify-content-center">
            <Logo />
          </div>

          <div className="col-6 contenedor-bordes-metalicos">
            <div className="d-flex justify-content-center contenedor-fondo-metalico">
            <nav className="navbar navbar-expand-lg " >
              <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Naves</a></li>
                      <li><a className="dropdown-item" href="#">Blásters</a></li>
                      <li><a className="dropdown-item" href="#">Droides</a></li>
                      <li><a className="dropdown-item" href="#">Tecnología</a></li>
                      <li><a className="dropdown-item" href="#">Curiosidades</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Noticias</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                  </li>
                  
                </ul>
              </div>
            </nav>
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
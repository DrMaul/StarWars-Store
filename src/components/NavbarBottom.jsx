
const NavbarBottom = () => {
  return (
    
    <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-danger" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item text-danger" href="#">Playstation</a></li>
                    <li><a className="dropdown-item text-danger" href="#">PC</a></li>
                    <li><a className="dropdown-item text-danger" href="#">XBOX</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#">Giftcards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger" href="#">Contacto</a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
  )
}

export default NavbarBottom
import CardBackground from './CardBackground';
import Banner1 from '../assets/error404bg.gif'
import FondoMetalDark from '../assets/fondometal-dark.jpg'

const Error404 = () => {
  return (
    <div className="container my-5">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
            <div className="carousel-item active">
                <CardBackground altura={'100vh'} backgroundImgSrc={Banner1} padding={'10px'} radio={'40px'} />
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black'}}>ERROR 404</h1>
                    <h3 style={{textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black'}}>¡Caiste en un control Imperial!</h3>
                    <p style={{textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}>Este no es el sitio que está buscando. Muevase!</p>
                    <button type="button" className="btn btn-dark" style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Volver al inicio</button>
                </div>
            </div>

        </div>
      
    </div>
    </div>
  )
}

export default Error404
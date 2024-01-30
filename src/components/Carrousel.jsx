import CardBackground from './CardBackground';
import Banner1 from '../assets/banner1.jpg'
import FondoMetalDark from '../assets/fondometal-dark.jpg'

const Carrousel = () => {

    

  return (
    <div className="container-fluid px-4">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <CardBackground altura={'100vh'} backgroundImgSrc={Banner1} padding={'10px'} radio={'40px'} />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 style={{textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black'}}>Bienvenidos a la Tienda de Curiosidades de Watto!</h1>
                        <p style={{textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}>En esta tienda podrás encontrar diversos articulos que comerciamos los contrabandistas del planeta Tatooine. Si eres un Soldado Imperial, no eres bienvenido.</p>
                        <button type="button" className="btn btn-dark" style={{backgroundImage: `url(${FondoMetalDark})`, boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Ver productos</button>
                    </div>
                </div>

            </div>
          
        </div>



        
    </div>



    
  )
}

export default Carrousel
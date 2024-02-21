import CardBackground from './CardBackground';
import Banner1 from '../assets/banner1.jpg'
import Watto from '../assets/watto.jpg'

const Carrousel = () => {

    

  return (
    <div className="container-fluid px-4">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <CardBackground altura={'80vh'} backgroundImgSrc={Banner1} padding={'10px'} radio={'40px'} />
                    
                    <div className="carousel-caption">
                        <div className="row">
                            <div className="col-3">
                                <img src={Watto} alt="Watto" style={{ padding: "10px", margin: "0px", borderRadius: "40px", height: "100%", width: "100%"}}/>
                            </div>
                            <div className="col-9 py-5">
                                <h1 style={{textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black'}}>Bienvenidos a la Tienda de Curiosidades de Watto!</h1>
                                <p style={{textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'}}>En esta tienda podrás encontrar diversos articulos que comerciamos los contrabandistas del planeta Tatooine. Si eres un Soldado Imperial, no eres bienvenido.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
          
        </div>



        
    </div>



    
  )
}

export default Carrousel
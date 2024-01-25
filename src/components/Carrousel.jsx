import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'

const Carrousel = () => {

    const bannerHeight = {
     height:   '100vh',
    };

  return (
    <div className="container-fluid px-0">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Banner1} className="d-block w-100" alt="Banner 1" style={bannerHeight}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>EAs FC 24</h5>
                    <p>$70000</p>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Banner2} className="d-block w-100" alt="Banner 2" style={bannerHeight}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>New DLC God Of War - Valhalla: Ragnarok</h5>
                    <p>$70000</p>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Banner3} className="d-block w-100" alt="Banner 3" style={bannerHeight}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Baldurs Gate</h5>
                    <p>$35000</p>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    
  )
}

export default Carrousel
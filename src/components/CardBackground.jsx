import BordeMetal from '../assets/bordemetal.jpg'
import '../styles/cardBackgroundStyles.css';
import { Link } from 'react-router-dom';

const CardBackground = ({altura, backgroundImgSrc, padding, radio}) => {
  return (
    
    <Link to={"/"}>
      <div className="card-background" style={{ height: altura, backgroundImage: `url(${BordeMetal})`, borderRadius: radio}}>          
        <img src={backgroundImgSrc} className="imagen-fondo" alt="Banner 1" style={{ padding: padding, borderRadius: radio }}/>
        
    </div>
    </Link>  

    
  )
}

export default CardBackground
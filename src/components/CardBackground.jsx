import BordeMetal from '../assets/bordemetal.jpg'
import '../styles/cardBackgroundStyles.css';

const CardBackground = ({altura, backgroundImgSrc, padding, radio}) => {
  return (
    <div className="card-background" style={{ height: altura, backgroundImage: `url(${BordeMetal})`, borderRadius: radio}}>          
        <img src={backgroundImgSrc} className="imagen-fondo" alt="Banner 1" style={{ padding: padding, borderRadius: radio }}/>
        
    </div>
  )
}

export default CardBackground
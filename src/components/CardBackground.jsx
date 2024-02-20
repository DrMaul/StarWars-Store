import BordeMetal from '../assets/bordemetal.jpg'
import { Link } from 'react-router-dom';

const CardBackground = ({altura, backgroundImgSrc, padding, radio}) => {
  return (
    
    <Link to={"/"}>
      <div style={{ height: altura, backgroundImage: `url(${BordeMetal})`, borderRadius: radio, position: "relative", overflow: "hidden"}}>          
        <img src={backgroundImgSrc} alt="Banner 1" style={{ padding: padding, borderRadius: radio, height: "100%", width: "100%" }}/>
        
      </div>
    </Link>  

    
  )
}

export default CardBackground
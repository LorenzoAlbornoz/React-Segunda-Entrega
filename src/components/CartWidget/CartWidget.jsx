import { Link } from 'react-router-dom'
import Img from '../../imagenes/cart-shopping-solid.svg'

const CartWidget = () => {

  return (
    <>    
        <Link to='/cart' >
          <img src={ Img }  style={{width: 50}}  alt="imagen"/>
        </Link>   
    </>
  )
}

export default CartWidget

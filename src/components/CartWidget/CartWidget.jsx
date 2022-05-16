import { Link } from 'react-router-dom'
import Img from '../../imagenes/carrito.svg'



const CartWidget = () => {
  return (
    <>    
        <Link to='/cart' >
          <img src={ Img } style={{width: 100}} alt="imagen"/>
        </Link>   
    </>
  )
}

export default CartWidget
/*const CartWidget = () => {
    return (
        <>
            <h3> <img src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1651497212/logo_2__preview_rev_1_ffozhj.png" alt="" /></h3>
        </>
    )
}

export default CartWidget*/
import img from '../../imagenes/carrito.svg'
import { FaBeer } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <>
            <h3> Lets go for a <FaBeer />? </h3>
            <img src={img} className="w-25" alt='image' />
        </>
    )
}

export default CartWidget
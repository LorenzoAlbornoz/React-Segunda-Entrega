import { useState } from "react";
import './styles.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const restar = () => {
      if (count > 1) {
        setcount(count - 1);
      }
    };
  
    const sumar = () => {
      if (count < stock) {
        setcount(count + 1);
      }
    };

    return (
        <div>
            { count }<br/>
            <button onClick={sumar} className="btn btn-primary">+</button>
            <button onClick={restar} className="btn btn-primary">-</button><br/>
            <button onClick={()=> onAdd(count)} className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

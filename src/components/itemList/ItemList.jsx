import Item from "../Item/";
import './styles.css';

const ItemList = 
    ( { productos } ) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { productos.map((prod) =>  <Item key={prod.id} prod={prod} />  ) }
            </div>
        )
    }


export default ItemList


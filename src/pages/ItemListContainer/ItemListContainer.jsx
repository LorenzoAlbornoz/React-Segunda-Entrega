import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

import ItemList from "../../components/ItemList/ItemList"


const ItemListContainer = () => {      
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    /*const [bool, setBool] = useState(true)*/

    const { id } = useParams() ;

useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryCollectionFilter = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection

getDocs(queryCollectionFilter)
.then(resp => setProductos (resp.docs.map(item => ({id: item.id, ...item.data() } ) ))) 
.catch((err)=> console.log(err))
.finally(()=>setLoading(false))

}, [id])


console.log(id)

  /*  
       //ejemplo de evento
   const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
}

const handleAgregar=()=>{
    setProductos([
        ...productos,
        { id: '8', categoria: 'Accesorios', name: 'Cable 2 metro', price: "1500", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798193/2m_ngmzvw.png', description: 'Este cable tiene un gran funcionamiento y durabilidad, todos sus componentes son testeados y de manera conjunta se verifica que el mismo funcione de manera correcta. Es una gran opción en relación precio calidad, el mismo tiene calidad original y cuenta con garantía ante cualquier falla o inconveniente en el funcionamiento del producto.' }
    ])
}

console.log(bool);
console.log('itemListContainer');*/


    /*function onAdd(cant) {
        console.log(cant)
    }
    
    console.log(id)*/


    return (
        <div>
            {/*<button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>*/} 

            { loading ? 
                <h2>Cargando...</h2> 
                : 
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList productos={productos} /> 
                </div>
            }
        </div> 

    )
}

export default ItemListContainer
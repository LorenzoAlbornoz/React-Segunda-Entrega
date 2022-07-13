import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

import ItemList from "../../components/ItemList"


const ItemListContainer = () => {      
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


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

    return (
        <div>
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
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState (true)
    const { detalleId } = useParams()

   /* useEffect(()=>     { 
    const db = getFirestore()
    const dbQuery = doc(db, 'items', '6tYJ2ZB2Oy6OvOQcHKI9')
    getDoc(dbQuery) 
    .then(resp => setProducto ( { id: resp.id, ...resp.data() } ) )
    .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))   
}, [])*/

    useEffect(() => {
        getFetch(detalleId)  // fetch llamada a una api  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [])

    console.log(producto)
    
    return (
        <div>
            {loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto}  />}
        </div>
    )
}
// FechOne
//         .then(resp => setProducto(resp))
//         .catch(err => console.error(err))
export default ItemDetailContainer

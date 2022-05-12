import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import  Productos  from '../../data/catalogo.json'
import './itemList.css'


const ItemList = () => {

  const [productos, setProductos] = useState([]);

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 3000);
  });

  const getProductosFromDB = async () => {
    try {
      const resultado = await getProductos;
      setProductos(resultado);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductosFromDB();
  }, []);

  //Aca mapeamos items para crear una lista de componentes Item que recibe por props un producto, o sea item => <Item item={item} />
  //El resultado de ese items.map podemos guardarlo en una constante, por ejemplo const productList = items.map...

  return (

    <div className='product-list-container'>
      {
        productos.length ? (
          <>
            {
              productos.map((productos) => {
                return (
                  <div key={productos.id}>
                    <Item
                      name={productos.name}
                      price={productos.price}
                      description={productos.description}
                      foto={productos.foto}
                      categoria={productos.categoria}
                      stock={productos.stock}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        )
      }
    </div>
  );
};

export default ItemList;
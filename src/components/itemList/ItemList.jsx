import Item from "../Item/Item"


const ItemList = ({ productos }) => {
  return (
        productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
  )
}

export default ItemList

/*import React, { useEffect, useState } from 'react'
import Item from '../item/Item'
import   productList   from '../../data/catalogo.json'
import './itemList.css'


const ItemList = () => {
  
  const [products, setProducts] = useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div className="product-list-container">
      {
 
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
                
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      price={product.price}
                      foto={product.foto}
                      stock={product.stock}
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

export default ItemList;*/
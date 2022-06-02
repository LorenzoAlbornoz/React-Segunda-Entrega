import { memo } from "react"
import Item from "../Item/Item"

// memo(componente), memo(commponente, fn)
const ItemList = 
    ( { productos } ) => {
        console.log('ItemList')
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { productos.map((prod) =>  <Item key={prod.id} prod={prod} />  ) }
            </div>
        )
    }


export default ItemList


/*import { memo } from "react"
import Item from "../Item/Item"

// memo(componente), memo(commponente, fn)
const ItemList = memo(
  ( { productos } ) => {
    console.log('ItemList')
    return (
          productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
    )
  }, (oldProps, newProps) => oldProps.productos.length === newProps.productos.length
)

export default ItemList


/*import {useState, memo} from 'react'
import Item from '../Item/Item'

const ItemList =memo(({items}) =>{                 
       
               console.log('item list')
   
               return (
                   <>
                      <ul>
                           { items.map((item)=>  <Item key={item.id}  item={item}  />  )  }
                       </ul>   
                   </>
               )
       }
, (oldProps, newProps)=> oldProps.items.length === newProps.items.length )
*/


/*
export default ItemList


import Item from "../Item/Item"


const ItemList = ({ productos }) => {
  return (
        productos.map((prod) =>  <Item key={prod.id} prod={prod} />  )
  )
}

export default ItemList


/*import { useContext } from "react"
import { contextApp } from "../../App"
import Item from "../Item/Item"


function ItemList() {
  const { prods, saludo } = useContext(contextApp)

  return(
  <div>
    {prods.map((prod) => (
      <>
      <Item key={prod.id} prod={prod} />
      <button onClick={saludo}>saludo</button>
      </>
    ))}
  </div>
  );
}

export default ItemList*/

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
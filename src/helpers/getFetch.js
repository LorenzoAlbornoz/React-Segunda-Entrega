const productos = [
    { id: '1', categoria: 'Fundas', name: 'Silicone Case Blanco',   price: 37, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370660/blanco_iojjr2.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '2', categoria: 'Fundas', name: 'Silicone Case Verde',  price: 27, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370644/verde_iltmea.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '3', categoria: 'Fundas', name: 'Silicone Case Azul',   price: 40, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370318/azul_nf8yfv.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '4', categoria: 'Fundas', name: 'Silicone Case Rosa',    price: 55, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370525/rosa_iydiru.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '5', categoria: 'Fundas', name: 'Silicone Case Rojo',   price: 11, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370336/rojo_qwz51t.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '6', categoria: 'Fundas', name: 'Silicone Case Amarillo', price: 19, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370327/amarillo_xsnnj9.png', description: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '7', categoria: 'Fundas', name: 'Reforzada Celeste',    price: 2,  foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652369315/celeste_ytvpan.png', description: 'Esta funda. Es de Acrílico en la parte trasera y cuenta con las punteras reforzadas de Silicona. Es una funda cómoda, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes. También es completa en la parte de abajo, es decir que protege él cargador y parlantes. Viene disponible para todos los modelos de iPhone.'  }
  ]

    
    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                    resolve( query )                           
                }, 2000)
            })            
        
    }


  const producto = { id: '1', categoria: 'Fundas', name: 'Silicone Case Blanco',   price: 37, foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370660/blanco_iojjr2.png' }

  export const getFechOne = new Promise((resolve)=>{
        setTimeout(()=>{                                          
            resolve( producto )                           
        }, 2000)
    })
  
        
    
  
  /*
  [
  {
    "id": 1,
    "categoria": "Funda",
    "name": "Bumper Case",
    "price": 50000,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370660/blanco_iojjr2.png " ,
    "description": "Es una bici plegable",
    "stock": 3
},
{
    "id": 2,
    "categoria": "Funda",
    "name": "Rainbow",
    "price": 40000,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370644/verde_iltmea.png",
    "description": "Es un casco",
    "stock": 5
},
{
    "id": 3,
    "categoria": "monopatines",
    "name": "Evo Gem",
    "price": 30000,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370318/azul_nf8yfv.png",
    "description": "Es un monopatin",
    "stock": 10
},
{
    "id": 4,
    "categoria": "bicicletas",
    "name": "Silicone Case",
    "price": 75000,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370327/amarillo_xsnnj9.png",
    "description": "Es una mountain bike",
    "stock": 1
},
{
    "id": 5,
    "categoria": "accesorios",
    "name": "Silicone Case",
    "price": 7500,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370336/rojo_qwz51t.png",
    "description": "Es un casco",
    "stock": 8
},
{
    "id": 6,
    "categoria": "monopatines",
    "name": "Reforzada",
    "price": 86500,
    "foto": "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370525/rosa_iydiru.png",
    "description": "Es un monopatin",
    "stock": 2
}
]

    
    export const getFetch = (id) => {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                    const query = id ? productos.find(producto => producto.id === id ) : producto                                  
                    resolve( query )                           
                }, 2000)
            })            
        
    }


  const producto = { id: '1', categoria: 'Funda', name: "Bumper Case",  price: 50000 , foto: "https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370660/blanco_iojjr2.png " }

  export const getFechOne = new Promise((resolve)=>{
        setTimeout(()=>{                                          
            resolve( producto )                           
        }, 2000)
    })*/

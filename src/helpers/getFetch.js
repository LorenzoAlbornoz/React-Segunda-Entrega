const productos = [
    { id: '1', categoria: 'Fundas', name: 'Silicone Case Blanco',   price: "1200", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370660/blanco_iojjr2.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '2', categoria: 'Fundas', name: 'Silicone Case Verde',  price: "1300", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370644/verde_iltmea.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '3', categoria: 'Fundas', name: 'Silicone Case Azul',   price: "1400", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370318/azul_nf8yfv.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '4', categoria: 'Fundas', name: 'Silicone Case Rosa',    price: "1000", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370525/rosa_iydiru.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '5', categoria: 'Fundas', name: 'Silicone Case Rojo',   price: "1200", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370336/rojo_qwz51t.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '6', categoria: 'Fundas', name: 'Silicone Case Amarillo', price: "1500", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652370327/amarillo_xsnnj9.png', descripcion: 'Esta funda. Está hecha de Silicona en toda la parte exterior y por dentro tiene felpa para proteger y cuidar tu iPhone. Es una funda resistente, de buen agarre, se adapta perfectamente a los botones y es completamente antigolpes' },
    { id: '7', categoria: 'Accesorios', name: 'Cable 1 metro', price: "1000", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798187/1m_e32gsl.png', descripcion: 'Este cable tiene un gran funcionamiento y durabilidad, todos sus componentes son testeados y de manera conjunta se verifica que el mismo funcione de manera correcta. Es una gran opción en relación precio calidad, el mismo tiene calidad original y cuenta con garantía ante cualquier falla o inconveniente en el funcionamiento del producto.' },
    { id: '8', categoria: 'Accesorios', name: 'Cable 2 metro', price: "1500", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798193/2m_ngmzvw.png', descripcion: 'Este cable tiene un gran funcionamiento y durabilidad, todos sus componentes son testeados y de manera conjunta se verifica que el mismo funcione de manera correcta. Es una gran opción en relación precio calidad, el mismo tiene calidad original y cuenta con garantía ante cualquier falla o inconveniente en el funcionamiento del producto.' },
    { id: '9', categoria: 'Accesorios', name: 'Adaptador 5w', price: "2000", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798210/5w_tgperz.png', descripcion: 'Esta base tiene una potencia de carga de 10W. Tiene entrada USB, por lo que es compatible tanto con IOS como con Android. La misma es de calidad original, y cuenta con garantía ante cualquier falla o inconveniente en el funcionamiento del producto.' },
    { id: '10', categoria: 'Vidrios', name: 'Protector Negro', price: "800", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798221/protector-v_vftw76.png', descripcion: 'Te presentamos nuestro Vidrio Templado Completo! Este protector, cubre de manera completa la pantalla del celular, llegando hasta todas las esquinas. Viene en color Blanco y Negro, para que quede del mismo color que la pantalla de tu iPhone. Parece que no tuvieras nada puesto. Es una gran opción para proteger tu celular.' },
    { id: '11', categoria: 'Vidrios', name: 'Protector Blanco', price: "600", foto: 'https://res.cloudinary.com/dcwpf7ghu/image/upload/v1652798221/protector-v_vftw76.png', descripcion: 'Te presentamos nuestro Vidrio Templado Completo! Este protector, cubre de manera completa la pantalla del celular, llegando hasta todas las esquinas. Viene en color Blanco y Negro, para que quede del mismo color que la pantalla de tu iPhone. Parece que no tuvieras nada puesto. Es una gran opción para proteger tu celular.' }
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

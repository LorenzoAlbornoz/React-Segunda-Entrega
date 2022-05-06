import {useState} from 'react'
import { FaBeer } from 'react-icons/fa';

//import Titulo from "./components/Titulo/Titulo";
//import Formulario from "./components/Formulario/Formulario";
//import FormContainer from "./components/componenteContenedor/FormContainer";



import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  const [count, setCount] = useState(1)
  const [fecha, setFecha] = useState(Date())
  

  //console.log(arrayEstado)
  //const tit = "Soy titulo de App";
  //const subTit = "Soy subtitulo de App";
  
  function sumar  () {
    //count ++
    setCount(count + 1)
    setFecha(Date(fecha))
    //console.log (count)
  }

  function restar () {
    setCount (count - 1)
  }



  return (
    <div className="App">
      <NavBar 
      componente = {() => ItemListContainer ({ saludo:  'Hola soy el componente contenedor'})}
      >
        {/*<ItemListContainer greeting={'Hola soy el componente contenedor'}/>*/}
        </NavBar>
        
        <p>Unidades disponibles: </p>
        <p>Fecha de la compra: {fecha}</p>
        <p>{count}</p>
        
        <button onClick={sumar}>Sumar +</button>
        <button onClick={restar}>Restar -</button>
       <contador initial ={1} stock={5} onAdd/>
      </div>
    );
  }
  
  export default App;
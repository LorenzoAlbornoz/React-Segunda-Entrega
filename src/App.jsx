//import Titulo from "./components/Titulo/Titulo";
//import Formulario from "./components/Formulario/Formulario";
//import FormContainer from "./components/componenteContenedor/FormContainer";


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  //const tit = "Soy titulo de App";
  //const subTit = "Soy subtitulo de App";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Hola soy el componente contenedor'}/>

    </div>
  );
}

export default App;

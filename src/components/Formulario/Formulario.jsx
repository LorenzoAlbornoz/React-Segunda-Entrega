//import Titulo from "../Titulo/Titulo";
export function Item (params){
  return 'item'
}


function Formulario({saludo, place}) {
  //Titulo( {titulo: 'Soy titulo de input} )
  return (
    <div>
      {/*<h1>Esto es el formulario</h1>*/}
      {/*<Titulo titulo= 'Soy titulo de input' subTit= 'Subtitulo de input'/>*/}
      <form>
      <input type="text" placeholder= {place}/>
      <button className="btn btn-outline-primary" onClick={saludo}>Saludo</button>
      </form>
    </div>
  );
}

export default Formulario
import Formulario, {Item} from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

function FormContainer() {
    const titulo = 'Titulo de Form' 
    const subTitulo = 'Sub Titulo de form'

    function saludar (){
        console.log('saludo')
      } 

    return (
    <>
    <Titulo titulo= {titulo} subTit= {subTitulo}/>
    <Item/>
    <Formulario place= 'Ingresar el dato' saludo = {saludar}/>
    </>
  )
}

export default FormContainer
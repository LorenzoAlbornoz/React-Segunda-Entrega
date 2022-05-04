const ItemListContainer = ({ greeting = 'saludo' }) => {
    function saludoAlert (){
        alert('hola')
    }
    return (
        <div>
            {greeting}
            <button onClick={saludoAlert}>Click</button>
        </div>
    )
}

export default ItemListContainer
import './App.css';
import NavBar from './components/navBar/NavBar'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar className="App-header" />
      <div>
        <ItemListContainer greeting="Productos" />
      </div>
    </div>
  );
}

export default App;

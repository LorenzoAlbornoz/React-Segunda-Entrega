import './App.css';
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="hello world!"/>
    </div>
  );
}

export default App;

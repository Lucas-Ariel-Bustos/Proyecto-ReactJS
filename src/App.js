import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="Instrumentos musicales(bajos)" />
    </div>
  );
}

export default App;

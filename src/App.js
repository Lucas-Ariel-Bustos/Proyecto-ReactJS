import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Badge } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="Instrumentos musicales(bajos)" />
      <div>
        {/* <Badge />PROXIMAMENTE NUEVA PÁGINA!!! */}
      </div>
    </div>
  );
}

export default App;

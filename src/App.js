// Importar el componente galery
// Exportar app por defecto
// Definir la funcion app
// Devolver la funcion gallery
// Dentro de etiquetas div y header
// Ambas con atributo className de la funcion app

import Gallery from './Gallery.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
      </header>
    </div>
  );
}

export default App;

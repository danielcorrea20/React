// Importar react de react
// Importar reactdom de reactdomclient
// Importar indexcss
// Importar app de app
// Declarar una constante de nombre container
// Asignarle el elemento con id root del documento
// Declarar una constante de nombre root
// Asignarle la creacion de la raiz en el elemento container del dom
// Usar root para representar la app en el modo estricto

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


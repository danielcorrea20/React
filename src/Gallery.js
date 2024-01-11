// Importar el componente profile
// Exportar la funcion gallery
// Definir la funcion gallery
// Devolver varias funciones profile
// Dentro de etiqueta section
// Indicar un encabezado con un titulo

import Profile from './Profile.js';

function Gallery() {
    return (
        <div className="Gallery">
            <header className="Gallery-header">
                <h1>Galeria de vehículos</h1>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
            </header>

        </div>
    )
}
export default Gallery;
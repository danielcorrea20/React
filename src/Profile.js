// Exportar la funcion profile
// Definir la funcion profile
// Devolver una etiqueta img con atributos src alt
// Probar primero un atributo src que sea online
// Probar segundo un atributo src que sea local


import coche from './coche.jpg';
import './Profile.css';

const coche2 = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/AC_Cobra_-_50th_Annyversary_Cobra_Limited_Edition_CSX8000_%2802%29.jpg';

function Profile() {
    return (
        <div className="Profile">
            <header className="Profile-header">
                <img src={coche} className="Profile-coche" alt="coche" />
                <p>
                    Ford Monstang (eleanor)
                </p>
                <img src={coche2} className="Profile-coche2" alt="coche2" />
                <p>
                    Ac Cobra
                </p>
            </header>

        </div>
    )
}
export default Profile;
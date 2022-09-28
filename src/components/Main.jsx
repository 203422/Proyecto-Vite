import '../assets/styles/main.css'
import fondo from '../assets/img/background.jpg'

function Main({ titulo, informacion }) {
    return (
        <main>
            <div className='contenedor-main'>
                <h1>{titulo}</h1>
                <p className='informacion'>{informacion}</p>
            </div>
        </main>
    )
}

export default Main
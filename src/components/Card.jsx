import '../assets/styles/card.css'

function Card({ img }) {

    const imagen = new URL(`../assets/img/${img}.jpg`, import.meta.url).href

    return (
        <div className='contenedor-card'>
            <img src={imagen} />
            <div className='cover'>
                <p className='marca'>{img}</p>
            </div>
        </div>
    )
}

export default Card
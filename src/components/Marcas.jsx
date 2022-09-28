import '../assets/styles/marcas.css'
import Card from '../components/Card'


function Marcas({ titulo }) {
    return (
        <section>
            <h2>{titulo}</h2>
            <div className='contenedor-marcas'>
                <Card
                    img='ford'
                />

                <Card
                    img='bmw'
                />

                <Card
                    img='audi'
                />

                <Card
                    img='chevrolet'
                />

                <Card
                    img='lamborghini'
                />

                <Card
                    img='nissan'
                />

                <Card
                    img='mercedes'
                />
                <Card
                    img='aston martin'
                />
                <Card
                    img='ferrari'
                />


            </div>
        </section>
    )
}

export default Marcas
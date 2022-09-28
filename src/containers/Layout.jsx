import Header from '../components/Header'
import Main from '../components/Main'
import Marcas from '../components/Marcas'
import Footer from '../components/Footer'

function Layout() {
    return (
        <>
            <Header
                logo='logo'
                link1='Inicio'
                link2='Marcas'
                link3='Galeria'
                link4='Sobre nosotros' />
            <Main
                titulo='Apasionados por los autos'
                informacion='Sabemos que disfrutas el rugir de los motores tanto como a nosotros, 
                            descubre un poco más sobre tus marcas favoritas.'/>

            <Marcas
                titulo='Marcas'
            />

            <Footer
                logo='logo'
                link1='Sobre nosotros'
                link2='Terminos de uso'
                link3='Terminos de privacidad'
                img1='facebook'
                img2='instagram'
                img3='twitter'
                texto='Derechos reservados 2022.' />


        </>
    )
}


export default Layout
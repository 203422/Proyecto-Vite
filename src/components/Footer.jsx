import '../assets/styles/footer.css'

function Footer({logo, img1, img2, img3, link1, link2, link3, texto }) {

    const imagen = new URL(`../assets/img/${logo}.png`, import.meta.url).href
    const icono1 = new URL(`../assets/img/${img1}.svg`, import.meta.url).href
    const icono2 = new URL(`../assets/img/${img2}.svg`, import.meta.url).href
    const icono3 = new URL(`../assets/img/${img3}.svg`, import.meta.url).href
    
    return (
        <footer>
            <div className='contenedor-footer'>
                <div className="contenedor-logo-footer">
                    <img className='logo-footer' src={imagen} />
                </div>
                <div className="terminos">
                    <a className='linkFooter'>{link1}</a>
                    <a className='linkFooter'>{link2}</a>
                    <a className='linkFooter'>{link3}</a>
                    <div className='contenedor-iconos'>
                        <img className='icono'
                            src={icono1}
                        />
                        <img className='icono'
                            src={icono2}
                        />
                        <img className='icono'
                            src={icono3}
                        />
                    </div>
                    <p>{texto}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
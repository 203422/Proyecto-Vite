import '../assets/styles/header.css'

function Header({logo, link1, link2, link3, link4 }) {

    const imagen = new URL(`../assets/img/${logo}.png`, import.meta.url).href

    return (
        <header className='header'>
            <div className='contenedor-header'>
                <div className='contenedor-logo-header'>
                    <img className='logo-header'
                        src={imagen}
                    />
                </div>

                <nav>
                    <a className='link' href='#' >{link1}</a>
                    <a className='link' href='#' >{link2}</a>
                    <a className='link' href='#' >{link3}</a>
                    <a className='link' href='#' >{link4}</a>
                </nav>
            </div>

        </header>
    )
}

export default Header
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <h1>KoaShop</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                Motherboards
                </li>
                <li className="nav-item">
                Procesadores
                </li>
                <li className="nav-item">
                Tarjetas Graficas
                </li>
            </ul>
            <span>
                <CardWidget/>
                </span>
        </div>
</div>
    </nav>
    )
}

export default NavBar
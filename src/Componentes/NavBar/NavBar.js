import './NavBar.scss';
import logo from './logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <header className="header">
                <div className="divContainer">
                    <Link to="/">
                        <img src={logo} className="logo"></img>
                    </Link>
                    <nav className="navBar">
                        <Link to="/" className="navBar-enlaces" ><b>Inicio</b></Link>
                        <Link to="productos/bajos" className="navBar-enlaces" >Bajos</Link>
                        <Link to="productos/cuerdas" className="navBar-enlaces" >Cuerdas</Link>
                        <Link to="/nosotros" className="navBar-enlaces" >Nosotros</Link>
                    </nav>
                    
                    <CartWidget />
                </div>
            </header>
        </div>
    )
}
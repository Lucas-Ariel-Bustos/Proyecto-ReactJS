import './NavBar.scss';
import logo from './logo.png'
import { CartWidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
    return (
        <div>
            <header className="header">
                <div className="divContainer">
                    <img src={logo} className="logo"></img>

                    <nav className="navBar">
                        <a className="navBar-enlaces" href="#"><b>Inicio</b></a>
                        <a className="navBar-enlaces" href="#">Bajos</a>
                        <a className="navBar-enlaces" href="#">Cuerdas</a>
                        <a className="navBar-enlaces" href="#"><CartWidget />1</a>
                        {/* <a className="navBar-enlaces" href="#">1</a> */}
                    </nav>

                </div>
            </header>
        </div>
    )
}
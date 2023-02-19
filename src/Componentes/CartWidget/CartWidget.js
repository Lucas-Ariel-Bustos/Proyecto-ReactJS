import carrito from './carrito.png';
import './CartWidget.scss';

export const CartWidget = () => {
    
    return (
        <div className="divCart">
            <img className="carrito" src={carrito}></img>
        </div>
    )
}
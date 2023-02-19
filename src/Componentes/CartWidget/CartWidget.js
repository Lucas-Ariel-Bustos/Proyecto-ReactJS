import carrito from './carrito.png';
import './CartWidget.scss';

export const CartWidget = () => {
    
    return (
        <div className="divCart">
            {/* <i class="bi bi-cart4"></i> */}
            <img className="carrito" src={carrito}></img>
        </div>
    )
}
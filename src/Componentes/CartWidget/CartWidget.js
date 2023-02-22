// Esta importación es solo para el uso de carrito como imágen(más adelante lo voy a borrar, prefiero trabajar con íconos)
// import carrito from './carrito.png';
import './CartWidget.scss';

export const CartWidget = () => {
    
    return (
        <div className="divCart">
            <a><i class="bi bi-cart4"></i></a>

           {/* Esta importación es solo para el uso de carrito como imágen(más adelante lo voy a borrar, prefiero trabajar con íconos) */}
            {/* <img className="carrito" src={carrito}></img> */}
        </div>
    )
}
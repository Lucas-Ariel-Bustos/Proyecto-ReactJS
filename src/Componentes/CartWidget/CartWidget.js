import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './CartWidget.scss';

export const CartWidget = () => {
    
    const { totalCantidad, cart } = useContext(CartContext)
    return (
        <Link to="/cart" className={`divCart ${cart.length > 0 ? 'divCart-active' : ``}`}>
            <span className='numero'>
                <i className="bi bi-cart4 cart"></i>
                {totalCantidad()}
            </span>
        </Link>
    )
}
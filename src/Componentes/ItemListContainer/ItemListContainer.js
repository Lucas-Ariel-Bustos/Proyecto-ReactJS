import './ItemListContainer.scss';
import { ItemCount } from '../ItemCount/ItemCount.js';


export const ItemListContainer = ({greeting}) => {

    return (
        <div className="divContenedor">
            <h1>En este espacio apareceran mis productos a la venta</h1>
            {greeting}

            <ItemCount />
        </div>
    )
}
import './ItemListContainer.scss';


export const ItemListContainer = ({greeting}) => {

    return (
        <div className="divContenedor">
            <h1>En este espacio apareceran mis productos a la venta</h1>
            {greeting}
        </div>
    )
}
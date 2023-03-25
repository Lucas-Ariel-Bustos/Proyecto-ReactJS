
export const LowStockMsg = ({stock}) => {
    
    return(
    <p><strong>
                {
                    stock === 1
                    ? `Queda una sola unidad de este producto`
                    : `Quedan ${stock} unidades de este producto`
                }
            </strong></p>
    )        
}
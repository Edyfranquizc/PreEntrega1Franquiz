import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
    return (
        
        products.map(products => <Item  key={products.id} products={products}/>)
    )
}

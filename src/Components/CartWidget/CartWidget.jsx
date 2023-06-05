import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div>
        <span className="cart"><FontAwesomeIcon icon={faCartShopping}/></span>
        
        <span className="notificacion"> 1 </span> 
    </div>
    )
}

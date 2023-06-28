import { Link } from "react-router-dom"

export const Item = ({products}) => {
    return (
        <div className=" card"> 
        <img src={products.img} alt="imagen"/>
        <div className="card-body">
        <label className="nombreCard"> {products.name}</label>
        <label className="precioCard">Precio: {products.price}</label>
        
        </div>

        <div className="card-footer">
            <Link to={`/detail/${products.id}`}>
            <button className="btn btn-dark">Detalle</button>
            </Link>
        </div>

        </div>
    )
    
}
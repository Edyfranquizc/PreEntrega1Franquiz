import { Link } from "react-router-dom"

export const Item = ({products}) => {
    return (
        <div className=" card w-25 mx-20"> 
        <img src={products.img} className="card-img-top img-fluid" alt="imagen"/>
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
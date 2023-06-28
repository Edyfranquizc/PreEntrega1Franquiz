export const ItemDetail = ({products}) => {


    return (
        <div className="container Container-detail">
        <div className="card-detail"> 
        <img src={products.img} className="img-detail"  alt="imagen"/>
        <div className="card-body-detail">
        <label className="nombreCard-detail"> {products.name}</label>
        <label className="modeloCard-detail">Modelo : {products.category}</label>
        <br />
        <label className="stockCard-detail">stock : {products.stock}</label>
        <br />
        <label className="precioCard-detail">Precio : {products.price}</label>
        </div>

        <div className="card-footer-detail">
            <button className="btn btn-dark">Comprar</button>

        </div>

        </div>
        </div>
    )
}
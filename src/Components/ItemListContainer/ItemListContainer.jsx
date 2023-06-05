import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    return (
        <div className='banner'>
        <div className="banner-container">
        <h1>{props.greeting}</h1>
        <p>La mejor Tienda de VideoJuegos</p>
        </div>
        </div>
    )
}

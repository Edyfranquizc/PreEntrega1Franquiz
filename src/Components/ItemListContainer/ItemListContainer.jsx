import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockFetch } from "../../Utils/mockFetch";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css'



export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { cid } = useParams(); 
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const data = await mockFetch();
            if (cid) {
            setProducts(data.filter(products => products.category === cid));
            } else {
            setProducts(data); 
            }
        } catch (error) {
            console.log(error);
        }
        };
        fetchProducts();
    }, [cid]); 
    return (
        <>
    
    {
        
        products.length !== 0 ? 
        <div className='banner'>
        <div className="banner-container">
        <h1>{props.greeting}</h1>
        <p>La mejor Tienda de VideoJuegos</p>
        </div>
        <ItemList products={products} />
        </div>  
        
                :

            <h2 className="cargando">Cargando...</h2>

        }

        
            </>
    
    )
}

import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { mockFetch } from "../../Utils/mockFetch";
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {
    const [products, setProducts] = useState ({})
    const {pid} = useParams()


    useEffect(()=>{
        mockFetch(pid)
        .then(resp => setProducts(resp))
        .catch(resp => console.log(err))
    }, [])
    return (
        
        <ItemDetail products={products}/>
    

    )
}
//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

// importiamo il componente ProdCard
import ProdCard from "../components/ProdCard";

export default function ProductList() {

    // stato per l'array di oggetti
    const [products, setProducts] = useState([]);

    //chiamata ajax per ottenere l'array di oggetti dall'API
    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    // useEffect con [] esegue fetchActors una sola volta
    useEffect(() => {
        fetchProducts()
    }
        , [])

    return (
        <div className="container">
            <div className="products">
                {/* Cicliamo l’array dei prodotti e per ognuno renderizziamo una ProdCard*/}
                {products.map((prodotto) => (
                    <ProdCard
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    );
}
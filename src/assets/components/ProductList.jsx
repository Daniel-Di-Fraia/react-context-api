//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

// importiamo il componente ProdCard
import ProdCard from "../components/ProdCard";

//importiamo useContext
import { useContext } from "react";

//importiamo il nostro context
import { BudgetContext } from "../context/BudgetContext";

export default function ProductList() {

    //stato per il pulsante attiva disattiva tramite budgetcontext
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    // stato per l'array di oggetti
    const [products, setProducts] = useState([]);

    //filtriamo l array di oggetti in base allo stato del pulsante (attivato/disattivato)
    const budgetFiltered = budgetMode ? products.filter(prod =>
        prod.price <= 30) : products;



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
                {/* array ciclato in base allo stato del pulsante */}
                {budgetFiltered.map((prodotto) => (
                    <ProdCard
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    );
}
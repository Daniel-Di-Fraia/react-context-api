//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

// import dell'hook per il parametro
import { useParams } from "react-router-dom";

//import dell'hook per i link
import { Link, NavLink } from "react-router-dom";



const DetailProduct = () => {

    // recuperiamo (id) tramite il parametro dinamico
    const { id } = useParams();

    //creiamo una variabile di stato
    const [detailProd, setDetailProd] = useState();

    //chiamata ajax per ottenere l'array di oggetti dall'API tramite ID
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetailProd(res.data))
            // .then((res) => console.log(res.data))
            .catch(error => console.log(error))
    }, [id])

    if (!detailProd) {
        return <p>Caricamento in corso...</p>;
    }

    return (
        <>
            <div className="flex-row">
                <div className="img-cont">
                    <img id="single-pic" src={detailProd.image} alt={detailProd.title} />
                </div>
                <ul className="single-list">
                    <li>{detailProd.title}</li>
                    <li className="list-category">{detailProd.category}</li>
                    <li className="list-description">{detailProd.description}</li>
                    <li className="list-price">{detailProd.price + " €"}<span id="buy">COMPRA ORA</span></li>
                </ul>
            </div>
            <div className="center">
                <Link className="back" to={`/CardShop`}>
                    Torna alla lista prodotti
                </Link>
            </div>
        </>
    )
}

export default DetailProduct
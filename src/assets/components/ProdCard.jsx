//creiamo un componente a parte per le informazioni dei prodotti in una card

import { Link, NavLink } from "react-router-dom";

export default function ProdCard(props) {

    const { prodotto } = props;

    return (
            <div className="product" >
                <Link to={`/CardShop/${prodotto.id}`}>
                <div className="product-image">
                    {/* immagini prodotti */}
                    <img src={prodotto.image} alt={prodotto.title} />
                </div>
                {/* info prodotti */}
                <div className="product-info">
                    <p className="prod-name">{prodotto.title}</p>
                    <p className="prod-price">{prodotto.price + " €"}</p>
                    <p className="prod-type">{prodotto.category}</p>
                </div>
                </Link>
            </div>
        
    )
}
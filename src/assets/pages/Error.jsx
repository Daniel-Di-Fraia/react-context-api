//pagina error se l utente inserisce un path non valido 
import { Link, NavLink } from "react-router-dom";
const Error = () => {
    return (
        <>
            <h1 id="not-found">Error 404 not found!</h1>
            <div className="center">
                <Link className="back" to={`/`}>
                    Torna alla home
                </Link>
            </div>
        </>
    )
}

export default Error
// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";

//importiamo useContext da react
import { useContext } from "react";

//importiamo il nostro budgetContext
import { BudgetContext } from "../context/BudgetContext";

// dati menù di navigazione pagina
const links = [
    { path: '/', label: 'Home' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/CardShop', label: 'Shop' }
]


const NavBar = () => {

    //stato per il pulsante attiva disattiva tramite il suo stato
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
                <li>
                    {/* creazione pulsante attiva-disattiva modalità budget */}
                    <button className={budgetMode ? "green-btn" : "grey-btn"} onClick={() => setBudgetMode(!budgetMode)}>
                        {budgetMode ? "Disattiva modalità Budget" : "Attiva modalità Budget"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
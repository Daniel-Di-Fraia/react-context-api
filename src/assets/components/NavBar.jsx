// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

// dati menù di navigazione pagina
const links = [
    { path: '/', label: 'Home' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/CardShop', label: 'Shop' }
]


const NavBar = () => {

    const {budgetMode, setBudgetMode} = useContext(BudgetContext);

    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
                <li>
                    <button onClick={()=> setBudgetMode(!budgetMode)}>
                        {budgetMode ? "Attiva modalità Budget" : "disattiva modalità Budget"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
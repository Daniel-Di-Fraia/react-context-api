// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";

// dati menù di navigazione pagina
const links = [
    { path: '/', label: 'Home' },
    { path: '/aboutUs', label: 'About Us' },
    { path: '/CardShop', label: 'Shop' }
]


const NavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
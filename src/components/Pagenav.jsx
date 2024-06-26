import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css"
import Logo from "./Logo"

function Pagenav() {
    return (
        <nav className={styles.nav}>
            <Logo/>
            <ul>
                <li>
                <NavLink to='/product'>Producet</NavLink>
                </li>
                <li>
                <NavLink to='/pricing'>Price</NavLink>
                </li>
                <li>
                <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
                </li>
            </ul>  
        </nav>
    )
}

export default Pagenav

import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className={styles.container}>
            <Link to='/'><img src={logo} alt="Logo"></img></Link>
            <ul className={styles.navbar}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Projects'>Projetos</Link></li>
                <li><Link to='/Company'>Empresa</Link></li>
                <li><Link to='/Contact'>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
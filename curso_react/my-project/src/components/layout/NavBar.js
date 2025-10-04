import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}><Link to='/'>Home</Link></li>
                <li className={styles.item}><Link to='/Empresa'>Empresa</Link></li>
                <li className={styles.item}><Link to='/Contato'>Contato</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className={styles.container}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p><span>Costs</span> &copy; 2025 </p>
        </footer>
    )
}

export default Footer
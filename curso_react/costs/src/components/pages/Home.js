import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'
import savings from '../../img/savings.svg'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <strong>Costs</strong></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/NewProject' text='Criar projeto'/>
            <img src={savings} alt='costs' />
        </section>
    )
}

export default Home
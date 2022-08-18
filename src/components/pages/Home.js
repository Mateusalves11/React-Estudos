import styles from './css/Home.module.css';
import savings from '../../imgs/savings.svg';
import LinkButton from '../LinkButton';
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NewProject" text="Criar Projeto!" />
            <img src={savings} alt="Costs" />
        </section>
    );
  }
  
  export default Home;
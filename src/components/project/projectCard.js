import styles from './projectcard.module.css';
import {Link} from 'react-router-dom';
import {BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";


function Projectcard({id,name,budget,category, handleRemove}){
    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/"><BsFillPencilFill/>Editar</Link>
                <Link to="/"><BsFillTrashFill/>Deletar</Link>
            </div>
        </div>
        )
}

export default Projectcard;
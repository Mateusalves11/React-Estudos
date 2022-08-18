import Message from "./message";
import {useLocation} from 'react-router-dom';
import styles from './css/projects.module.css'; 
import Container from 'react-bootstrap/Container'
import LinkButton from "../LinkButton";
import Projectcard from "../project/projectCard";
import { useState, useEffect } from "react";
import stylest from './css/container.module.css'
import Loading from "../layout/Loading";


function Projects() {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    const location = useLocation();

    let message = '';
    if(location.state){
        message = location.state.message
    }

    
    useEffect(() => {
      setTimeout(() => {fetch('http://localhost:5000/projects',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then(data => {
    setProjects(data)
    setRemoveLoading(true)
    })
    .catch(err => console.log(err))},400)
    },[])
   
    return (
      <div className={styles.project_container}>
        <div className={styles.title_container}>
          <h1>Meus Projetos</h1>
        <LinkButton to="/NewProject" text="Criar Projeto!" />
        </div>
        {message && <Message type="success" msg={message}/>}
        <Container className={stylest.cards_container}>
          {projects.map((project) => <Projectcard key={project.id} 
          id={project.id} 
          name={project.name}
          budget={project.budget}
          category={project.category.name}
          />)}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (<p>Não há projetos cadastrado!</p>)}
        </Container>
      </div>
      
    );
  }
  
  export default Projects;


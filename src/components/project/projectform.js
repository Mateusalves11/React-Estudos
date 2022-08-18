import styles from './projectform.module.css';
import Input from '../form/input';
import Select from '../form/select';
import SubmitBtn from '../form/submitbtn';
import {useEffect, useState} from 'react';


function ProjectForm({handleSubmit,btnText, projectData}){

    const [categories, setCategories] = useState([]);
    const [project,setProject] = useState(projectData || {});

    useEffect(()=>{fetch("http://localhost:5000/categories",{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data);
    })
    .catch(err => console.log(err));},[]);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({...project,[e.target.name]: e.target.value});
    }
    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }

    return(
        <div className={styles.form}>
            <form onSubmit={submit}>
                <Input 
                type="text" 
                text="Nome do projeto" 
                name="name"
                placeholder="Nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""}
                />
                <Input 
                type="number" 
                text="Orçamento do projeto" 
                name="budget"
                placeholder="Insira o orçamento do projeto"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
                />
                
                <Select 
                name="category_id" 
                text="Selecione a Categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category? project.category.id : ""}
                />

                <SubmitBtn text={btnText}/>
            </form>
        </div>
    )    
}

export default ProjectForm;
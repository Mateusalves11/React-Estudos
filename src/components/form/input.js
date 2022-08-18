import styles from './input.module.css';

function Input({type,text, name, placeholder, value, handleOnChange}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} id={name} onChange={handleOnChange} value={value}/>
        </div>
    )    
}

export default Input;
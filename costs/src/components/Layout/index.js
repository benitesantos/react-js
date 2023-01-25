import styles from  './layout.module.css';


export default function Container({children, customClass}){
    return(
        
        <div className= {`${styles.container} ${styles[customClass]}`}>
            {children}
        </div>
    )
}
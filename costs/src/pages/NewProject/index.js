import Forms from '../../components/Forms';
import styles from './newProject.module.css';


export default function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Forms btnText='Criar projeto'/>
    </div>
  );
}

import Input from "../Input";
import Select from "../Select";
import SubmitButton from "../SubmitButton";
import styles from "./forms.module.css";
import {useState} from 'react';

export default function Forms({btnText}) {

  const [categories, setCategories] = useState([]);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budjet"
        placeholder="Insira o orçamento total"
      />

     <Select name='category_id' text='Selecione a categoria'/>
      <SubmitButton text={btnText}/>
    </form>
  );
}

import { InputHTMLAttributes } from 'react'
import plusIcon from '../../assets/icons/plus.svg';
import styles from './styles.module.css';

interface NewTaskProps extends InputHTMLAttributes<HTMLInputElement> {
  onAdd: () => void;
}

export function NewTask({ onAdd, ...inputProps }: NewTaskProps) {
  return (
    <div className={styles.container} >
      <input type="text" placeholder="Adicione uma nova tarefa" {...inputProps} />

      <button onClick={onAdd}>
        Criar 
        <img src={plusIcon} alt="Ícone de mais" />
      </button>
    </div>
  )
}
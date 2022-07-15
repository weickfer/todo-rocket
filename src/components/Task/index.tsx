import checkIcon from '../../assets/icons/checked.svg'
import trashIcon from '../../assets/icons/trash.svg';
import styles from './styles.module.css';

interface TaskProps {
  data: {
    id: number;
    title: string;
    done: boolean;
  };
  onToggle(): void;
  onDelete(): void;
}

export function Task({ data, onToggle, onDelete }: TaskProps) {
  return (
    <li className={styles.container}>
      {/* <button 
        className={isToggled ? styles.checkboxToggled : styles.checkbox} 
        onClick={() => setIsToggled(!isToggled)} 
      /> */}
      {
        data.done ? (
          <button className={styles.checkboxToggled} onClick={onToggle}>
            <div>
              <img src={checkIcon} alt="Checked" />
            </div>
          </button>
        ) : (
          <button className={styles.checkbox} onClick={onToggle}>
            <div />
          </button>
        )
      }

      <p>{data.title}</p>
    
      <button className={styles.deleteButton} onClick={onDelete}>
        <img src={trashIcon} alt="Excluir" />
      </button>
    </li>
  )
}
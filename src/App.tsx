import { ChangeEvent, useState } from 'react'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'

import './styles/globals.css'
import styles from './styles/App.module.css'

type Task = {
  id: number
  title: string
  done: boolean
}

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState<Task[]>([])

  const todosSize = todos.length
  const todosDoneSize = todos.filter(todo => todo.done).length

  const newTodoInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }

  const addNewTodo = () => {
    setNewTodo('')
    setTodos(todos => [...todos, {
      id: Math.floor(Math.random() * 10000000),
      title: newTodo,
      done: false
    }])
  }

  const toggleTask = (id: number) => {
    const todosWithToggledTask = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }

      return todo
    })

    setTodos(todosWithToggledTask)
  }

  const deleteTask = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <NewTask value={newTodo} onChange={newTodoInputChange} onAdd={addNewTodo} />

        <div className={styles.tasks}>
          <header>
            <div className={styles.info}>
              Tarefas criadas <span>{todosSize}</span>
            </div>
            
            <div className={styles.info}>
              Concluídas <span>{todosDoneSize} de {todosSize}</span>
            </div>
          </header>

          <ul className={styles.tasksList}>
            {
              todos.map(todo => <Task data={todo} key={todo.id} onToggle={() => toggleTask(todo.id)} onDelete={() => deleteTask(todo.id)} />)
            }
          </ul>
        </div>
      </main>
    </>
  )
}

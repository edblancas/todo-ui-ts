import { FormEvent, useEffect, useState } from 'react'
import './App.css'

type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('')

  useEffect(() => {
    setTodos([])
  }, [])

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoTitle.trim() === '') return;
    setTodos([...todos, { id: crypto.randomUUID(), title: newTodoTitle, completed: false }])
    setNewTodoTitle('');
  }

  const handleDelete = (idToDelete: string) => {
    const newTodos = todos.filter(todo => todo.id !== idToDelete);
    console.log('updated todos', newTodos);
    setTodos(newTodos);
  }

  const handleCheck = (id: string, checked: boolean) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: checked }
      }
      return todo;
    });
    console.log('newTodos', newTodos);
    setTodos(newTodos);
  }

  return (
    <>
      <h3>Todo app</h3>
      <form onSubmit={handleAddTodo}>
        <input type='text' value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
        <button type='submit' >add todo</button>
      </form>
      <ul>
        {todos.length === 0 && 'No todos'}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type='checkbox' id={todo.id} checked={todo.completed} onChange={(e) => handleCheck(todo.id, e.target.checked)} />
              <label htmlFor={todo.id}>
                {todo.title}
              </label>
              <button onClick={(_e) => handleDelete(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App

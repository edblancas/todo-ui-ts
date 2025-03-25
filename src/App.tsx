import { createContext, FormEvent, useContext, useEffect, useState } from 'react'
import './App.css'
import { TodoItem } from './components/TodoItem';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

const TodoContext = createContext<any>(undefined);
export const useTodo = () => useContext(TodoContext);

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

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <h3>Todo app</h3>
      <form onSubmit={handleAddTodo}>
        <input type='text' value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
        <button type='submit' >add todo</button>
      </form>
      <ul>
        {todos.length === 0 && 'No todos'}
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} {...todo} />
          )
        })}
      </ul>
    </TodoContext.Provider>
  )
}

export default App

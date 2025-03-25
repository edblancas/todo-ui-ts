import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

const TodoContext = createContext<any>(undefined);
export const useTodo = () => useContext(TodoContext);

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos([])
  }, [])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <h3>Todo app</h3>
      <TodoForm />
      <TodoList todos={todos} />
    </TodoContext.Provider>
  )
}

export default App

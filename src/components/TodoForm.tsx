import { FormEvent, useState } from "react";
import { useTodo } from "../App";

export function TodoForm() {
  const { todos, setTodos } = useTodo();
  const [newTodoTitle, setNewTodoTitle] = useState<string>('')

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoTitle.trim() === '') return;
    setTodos([...todos, { id: crypto.randomUUID(), title: newTodoTitle, completed: false }])
    setNewTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type='text' value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
      <button type='submit' >add todo</button>
    </form>
  )
}

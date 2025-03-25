import { useTodo } from "../App";
import type { Todo } from "../App";

export function TodoItem({ id, title, completed }: { id: string, title: string, completed: boolean }) {
  const { todos, setTodos } = useTodo();

  const handleCheck = (id: string, checked: boolean) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, completed: checked }
      }
      return todo;
    });
    console.log('newTodos', newTodos);
    setTodos(newTodos);
  }

  const handleDelete = (idToDelete: string) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== idToDelete);
    console.log('updated todos', newTodos);
    setTodos(newTodos);
  }

  return (
    <li key={id}>
      <input type='checkbox' id={id} checked={completed} onChange={(e) => handleCheck(id, e.target.checked)} />
      <label htmlFor={id}>
        {title}
      </label>
      <button onClick={(_e) => handleDelete(id)}>Delete</button>
    </li>
  )
}

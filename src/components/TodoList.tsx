import type { Todo } from '../App'
import { TodoItem } from './TodoItem'

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.length === 0 && 'No todos'}
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        )
      })}
    </ul>
  )
}

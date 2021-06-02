import { FunctionComponent } from "react";
import { Checkbox } from "@material-ui/core";

type TodoListProps = {
  todos: string[];
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos }) => {
  return (
    <div style={{ width: "300px" }}>
      <h2>My List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            <Checkbox />
            {todo}
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty">There is nothing here.</p>}
    </div>
  );
};

export default TodoList;

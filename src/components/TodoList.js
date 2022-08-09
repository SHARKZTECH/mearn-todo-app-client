import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:5000/todos/");
    setTodos(data);
  };

  console.log(todos);

  return (
    <div>
      <h3>Todo List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsibility</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr key={i}>
              <td>{todo.description}</td>
              <td>{todo.responsible}</td>
              <td>{todo.priority}</td>
              <td>
                <Link className="btn btn-primary" to={`/edit/${todo._id}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

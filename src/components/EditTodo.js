import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditTodo = () => {
  const params = useParams();
  const [todo, setTodo] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: false
  });

  const getTodo = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/todos/${params.id}`
    );

    setTodo({
      description: data.description,
      responsible: data.responsible,
      priority: data.priority,
      completed: false
    });
  };
  getTodo();

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkBox" ? e.target.checked : e.target.value;

    setTodo({
      ...todo,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo.description && todo.responsible && todo.priority) {
      const res = await axios.post("http://localhost:5000/todos/add", todo);
      console.log(res);
    } else alert("All fields required");

    setTodo({
      description: "",
      responsible: "",
      priority: "",
      completed: false
    });
  };

  return (
    <Container>
      <h3>Edit Todo</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Responsible</Form.Label>
          <Form.Control
            type="text"
            placeholder="Responsible"
            name="responsible"
            value={todo.responsible}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            inline
            label="Low"
            type={"radio"}
            id={`inline-radio-1`}
            name="priority"
            value={"low"}
            checked={todo.priority === "low"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Medium"
            type={"radio"}
            id={`inline-radio-2`}
            name="priority"
            value={"medium"}
            checked={todo.priority === "medium"}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="High"
            type={"radio"}
            id={`inline-radio-3`}
            name="priority"
            value={"high"}
            checked={todo.priority === "high"}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Create Todo
        </Button>
      </Form>
    </Container>
  );
};
export default EditTodo;

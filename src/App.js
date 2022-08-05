import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

import { Nav, Navbar, Container, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SharkzTech</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <NavItem>Todos</NavItem>
            </LinkContainer>
            <LinkContainer to="/create">
              <NavItem className="mx-3">Create</NavItem>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <h1 className="text-center">Todo App</h1>
      <Routes>
        <Route path="/" exact element={<TodoList />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </Router>
  );
}

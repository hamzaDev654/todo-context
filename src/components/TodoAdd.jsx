import React, { useContext, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import TodoContext from "../store/TodoContext";

const TodoList = () => {
  const taskRef = useRef("");
  const fromRef = useRef("");
  const { addTask} = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const inputValue = taskRef.current.value;
    addTask(inputValue);

    // console.log(inputValue);
 

    fromRef.current.reset();
  };
  return (
    <Container>
      <Form onSubmit={submitHandler} ref={fromRef}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Todo:</Form.Label>
          <Form.Control type="text" placeholder="Enter Todo" ref={taskRef} />
          <Form.Text className="text-muted">
            You will see Todo as list as soon as you added !
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default TodoList;

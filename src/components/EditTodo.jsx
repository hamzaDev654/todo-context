import React, { useContext, useRef } from "react";
import { Form } from "react-bootstrap";
import { BiSave } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import TodoContext from "../store/TodoContext";
const EditTodo = ({ task }) => {
  const { updateTask } = useContext(TodoContext);
  const taskRef = useRef("");

  const onSvaeHandler = () => {
    updateTask({
      ...task,
      task: taskRef.current.value,
      isEdit: false,
    });
  };

  const onCancle = () => {
    updateTask({
      ...task,
      isEdit: false,
    });
  };
  return (
    <Form className="todoForm">
      <Form.Group className="formGroup">
        <Form.Control type="text" defaultValue={task.task} ref={taskRef} />
      </Form.Group>
      <div className="icons">
        <BiSave fontSize={20} onClick={onSvaeHandler} />
        <MdOutlineCancel fontSize={20} onClick={onCancle} />
      </div>
    </Form>
  );
};

export default EditTodo;

import React, { useContext } from "react";
import { Col, ListGroup, Row, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { TbEdit, TbEditOff } from "react-icons/tb";
import TodoContext from "../store/TodoContext";
import EditTodo from "./EditTodo";
const TodoList = () => {
  const { tasks, deleteTask, updateTask } = useContext(TodoContext);

  console.log(tasks);
  return (
    <div className="container">
      <ListGroup>
        {tasks.map((t) => (
          <ListGroup.Item key={t.id}>
            <Row>
              {!t.isEdit ? (
                <>
                  <Col className="todoCol">
                    {t.task && (
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="todo"
                        checked={t.done}
                        onChange={(e) => {
                          updateTask({
                            ...t,
                            done: e.target.checked,
                          });
                        }}
                      />
                    )}
                    {t.done ? (
                      <s className="task">{t.task}</s>
                    ) : (
                      <span className="task">{t.task}</span>
                    )}
                  </Col>

                  <Col md={2}>
                    <span className="p-2">
                      {!t.done && t.task ? (
                        <TbEdit
                          onClick={() => {
                            updateTask({
                              ...t,
                              isEdit: true,
                            });
                          }}
                          fontSize={20}
                        />
                      ) : (
                        <TbEditOff fontSize={20} className="disabled" />
                      )}
                    </span>
                    <span>
                      <MdDelete
                        onClick={() => {
                          deleteTask(t.id);
                        }}
                        fontSize={20}
                      />
                    </span>
                  </Col>
                </>
              ) : (
                <Col>
                  <EditTodo task={t} />
                </Col>
              )}
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;

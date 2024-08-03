//TodoItem component for displaying individual to-do items
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const TodoItem = ({ todo, onUpdate, onDelete }) => (
  <ListGroup.Item>
    {todo.text}
    <Button variant="warning" onClick={() => onUpdate(todo.id)}>Edit</Button>
    <Button variant="danger" onClick={() => onDelete(todo.id)}>Delete</Button>
  </ListGroup.Item>
);

export default TodoItem;

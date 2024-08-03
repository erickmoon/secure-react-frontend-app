import React, { useState, useEffect } from 'react'; // Import React and hooks for managing state and side effects
import { Container, Form, Button, ListGroup } from 'react-bootstrap'; // Import Bootstrap components for layout and styling
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/api'; // Import API functions for CRUD operations
import TodoItem from './TodoItem'; // Import TodoItem component for displaying individual to-do items

/**
 * TodoList component manages and displays a list of to-do items.
 */
const TodoList = () => {
  // State variables for storing to-do items, new to-do input, and currently editing to-do
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  /**
   * Fetches the list of to-do items from the API when the component mounts.
   */
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(); // Fetch to-dos from the API
        setTodos(response.data); // Update state with fetched to-dos
      } catch (err) {
        console.error(err); // Log any errors to the console
      }
    };

    fetchTodos(); // Call the function to fetch to-dos
  }, []); // Empty dependency array means this effect runs only once on mount

  /**
   * Handles adding a new to-do item.
   */
  const handleAddTodo = async () => {
    try {
      await addTodo(newTodo); // Send the new to-do to the API
      setNewTodo(''); // Clear the input field
      const response = await getTodos(); // Fetch updated list of to-dos
      setTodos(response.data); // Update state with new list
    } catch (err) {
      console.error(err); // Log any errors to the console
    }
  };

  /**
   * Handles updating an existing to-do item.
   * 
   * @param {number} id - The ID of the to-do item to update
   */
  const handleUpdateTodo = async (id) => {
    try {
      await updateTodo(id, newTodo); // Send the updated to-do to the API
      setEditingTodo(null); // Clear the editing state
      setNewTodo(''); // Clear the input field
      const response = await getTodos(); // Fetch updated list of to-dos
      setTodos(response.data); // Update state with new list
    } catch (err) {
      console.error(err); // Log any errors to the console
    }
  };

  /**
   * Handles deleting a to-do item.
   * 
   * @param {number} id - The ID of the to-do item to delete
   */
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id); // Send request to delete the to-do item
      const response = await getTodos(); // Fetch updated list of to-dos
      setTodos(response.data); // Update state with new list
    } catch (err) {
      console.error(err); // Log any errors to the console
    }
  };

  return (
    <Container>
      <h2>To-Do List</h2>
      {/* Form for adding or updating a to-do */}
      <Form>
        <Form.Group controlId="formNewTodo">
          <Form.Label>{editingTodo ? 'Edit Todo' : 'New Todo'}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state on input change
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => editingTodo ? handleUpdateTodo(editingTodo) : handleAddTodo()}
        >
          {editingTodo ? 'Update Todo' : 'Add Todo'} {/* Button text depends on editingTodo state */}
        </Button>
      </Form>
      {/* List of to-do items */}
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} // Unique key for each to-do item
            todo={todo}
            onUpdate={() => setEditingTodo(todo.id)} // Set editing state when updating
            onDelete={handleDeleteTodo} // Pass delete handler to TodoItem
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoList; // Export the TodoList component for use in other parts of the application

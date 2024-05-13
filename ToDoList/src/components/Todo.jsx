import { useState } from "react";

export const Todo = () => {
  // Define state variables using the useState hook
  const [todos, setTodos] = useState([]); // State variable to store the list of todos
  const [newTodo, setNewTodo] = useState(''); // State variable to store the value of the new todo input field

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) { // Check if the newTodo is not empty
      // Add the new todo to the todos array and reset the newTodo state
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Function to remove a todo by its index
  const removeTodo = (index) => {
    const newTodos = [...todos]; // Create a copy of the todos array
    newTodos.splice(index, 1); // Remove the todo at the specified index
    setTodos(newTodos); // Update the state with the new array
  };


  return (
    <div>
      <h1>Todo List</h1>
      {/* Input field to add new todos */}
      <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      {/* Button to add the new todo */}
      <button className="btn btn-success" onClick={addTodo}>Add Todo</button>
      {/* List to display the todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} >
            {todo}
            {/* Button to remove the todo */}
            <button className="btn btn-danger" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/todos/')
      .then(response => {
        setTodos(response.data.todos);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
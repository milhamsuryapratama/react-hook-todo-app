import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(
    [
      { text: "Makan", isCompleted: false },
      { text: "Mandi", isCompleted: false }
    ]
  )

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const unCompleted = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h2>Todo App</h2>
      <p>{todos.length} Todos</p>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            unCompleted={unCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
        <br />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

// const Todo = ({ todo, index }) => <div className="todo" key={index}>{todo.text}</div>;

function Todo({ todo, index, completeTodo, unCompleted, deleteTodo }) {
  return (
    <div className="todo" key={index} style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      {
        todo.isCompleted ? <button onClick={() => unCompleted(index)}>UnCompleted</button> : <button onClick={() => completeTodo(index)}>Completed</button>
      }
      <button onClick={() => deleteTodo(index)}>x</button>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

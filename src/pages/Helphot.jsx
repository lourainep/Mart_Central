import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      task,
      status,
    };
    setTodos([newTodo, ...todos]);
    setTitle('');
    setTask('');
    setStatus('Not Started');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      setTitle(todoToUpdate.title);
      setTask(todoToUpdate.task);
      setStatus(todoToUpdate.status);
      setEditMode(true);
      setEditId(id);
    }
  };

  const saveUpdate = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return {
          ...todo,
          title,
          task,
          status,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditMode(false);
    setEditId(null);
    setTitle('');
    setTask('');
    setStatus('Not Started');
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container mx-auto bg-red p-4  w-[400px] border border-black rounded flex flex-col items-center">
      <div className="text-3xl font-bold mb-4">To-Do App</div>
      <div className="mb-4 w-60">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block mb-2 p-2 border border-gray-300 rounded w-full"
        ></textarea>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block mb-4 p-2 border border-gray-300 rounded w-full"
        >
          <option value="Not Started">Not Started</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Complete">Complete</option>
        </select>
        <button
          onClick={clearTodos}
          className="bg-textw text-white px-4 py-2 rounded hover:bg-stone"
        >
          Clear
        </button>
        {editMode ? (
          <button
            onClick={saveUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Update
          </button>
        ) : (
          
          <button
            onClick={addTodo}
            className="bg-textw text-white px-4 py-2 ml-[25%] rounded hover:bg-stone"
          >
            Add Todo
          </button>
        )}
      </div>
      <div className="todo-list w-64">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-item bg-textw p-4 mb-4 rounded border border-gray-300"
          >
            <h3 className="text-xl font-bold mb-2">{todo.title}</h3>
            <p className="mb-2">{todo.task}</p>
            <p className="mb-2">Status: {todo.status}</p>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 border text-white px-2 py-1 rounded mr-2 hover:bg-stone"
            >
              Delete
            </button>
            <button
              onClick={() => updateTodo(todo.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:underline"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

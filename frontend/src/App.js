// frontend/src/App.js
import './App.css';
import { useState, useEffect } from 'react';
import api from './api';
import Lists from './components/Lists';
import Form from './components/Form';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    api
      .get('/todos')
      .then(response => setTodoData(response.data || []))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInput = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    const newTodo = {
      title: value,
      completed: false,
      order: todoData.length,
    };
    api
      .post('/todos', newTodo)
      .then(response => {
        setTodoData(prev => [...prev, response.data]);
        setValue('');
      })
      .catch(error => console.error('Error posting data:', error));
  };

  const handleDelete = () => {
    api
      .delete('/todos')
      .then(() => setTodoData([]))
      .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-96 p-6 m-4 bg-white rounded shadow sm:w-3/4 sm:max-w-lg md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>TO-DO LIST</h1>
          <button onClick={handleDelete}>Delete All</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form
          handleSubmit={handleSubmit}
          value={value}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
}

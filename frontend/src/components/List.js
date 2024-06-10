// frontend/src/components/List.js
import React, { useState } from 'react';
import api from '../api';

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleDelete = async () => {
      try {
        await api.delete(`/todos/${id}`);
        setTodoData(todoData.filter(todo => todo._id !== id));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };

    const handleToggleComplete = async () => {
      try {
        await api.put(`/todos/${id}`, {
          completed: !completed,
        });
        setTodoData(
          todoData.map(todo =>
            todo._id === id ? { ...todo, completed: !completed } : todo
          )
        );
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    const handleEditChange = event => setEditedTitle(event.target.value);

    const handleSubmit = async event => {
      event.preventDefault();
      try {
        await api.put(`/todos/${id}`, {
          title: editedTitle,
        });
        setTodoData(
          todoData.map(todo =>
            todo._id === id ? { ...todo, title: editedTitle } : todo
          )
        );
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    return isEditing ? (
      <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
        <form onSubmit={handleSubmit}>
          <input
            value={editedTitle}
            onChange={handleEditChange}
            className='w-full px-3 mr-4 text-gray-500 rounded'
          />
        </form>
        <div className='items-center'>
          <button
            className='px-4 py-2 float-right'
            onClick={() => setIsEditing(false)}>
            ↩
          </button>
          <button className='px-4 py-2 float-right' onClick={handleSubmit}>
            save
          </button>
        </div>
      </div>
    ) : (
      <div
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded ${
          snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
        }`}>
        <div className='items-center'>
          <input
            type='checkbox'
            checked={completed}
            onChange={handleToggleComplete}
            className='mr-1'
          />
          <span className={completed ? 'line-through' : undefined}>
            {title}
          </span>
        </div>
        <div className='items-center'>
          <button className='px-4 py-2 float-right' onClick={handleDelete}>
            x
          </button>
          <button
            className='px-4 py-2 float-right'
            onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    );
  }
);

export default List;

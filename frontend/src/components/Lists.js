// frontend/src/components/Lists.js
import React from 'react';
import api from '../api';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ todoData, setTodoData }) => {
  const handleEnd = result => {
    if (!result.destination) return;

    const reorderedTodoData = Array.from(todoData);
    const [reorderedItem] = reorderedTodoData.splice(result.source.index, 1);
    reorderedTodoData.splice(result.destination.index, 0, reorderedItem);

    reorderedTodoData.forEach((todo, index) => {
      todo.order = index;
    });

    setTodoData(reorderedTodoData);

    api.put('/todos/reorder', { todos: reorderedTodoData })
      .catch(error => console.error('Error updating order:', error));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((todo, index) => (
                <Draggable
                  key={todo._id}
                  draggableId={todo._id.toString()}
                  index={index}>
                  {(provided, snapshot) => (
                    <List
                      key={todo._id}
                      id={todo._id}
                      title={todo.title}
                      completed={todo.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;

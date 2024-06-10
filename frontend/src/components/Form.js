// frontend/src/components/Form.js
import React from 'react';

const Form = ({ handleSubmit, value, handleInput }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex pt-2'>
        <input
          type='text'
          name='value'
          className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
          placeholder='Add a Task'
          value={value}
          onChange={handleInput}
        />
        <input
          type='submit'
          value='Submit'
          className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-500'
        />
      </form>
    </div>
  );
};

export default Form;

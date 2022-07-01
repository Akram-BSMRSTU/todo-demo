import React from 'react';
import InputForm from './InputForm';
import UpdateTask from './UpdateTask';

const Todo = () => {
    return (
        <div className='bg-white'>
            <h1 className='3xl'>This is todo</h1>
            <InputForm></InputForm>
            <UpdateTask></UpdateTask>
        </div>
    );
};

export default Todo;
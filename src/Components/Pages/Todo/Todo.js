import React from 'react';
import InputForm from './InputForm';
import TaskList from './TaskList';


const Todo = () => {
    return (
        <div className='bg-white'>
            <h1 className='3xl'>This is todo</h1>
            <InputForm></InputForm>
            <TaskList></TaskList>
            
        </div>
    );
};

export default Todo;
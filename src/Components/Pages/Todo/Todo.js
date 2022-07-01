import React from 'react';
import AddTask from './AddTask';

import TaskList from './TaskList';
import TodoList from './TodoList';


const Todo = () => {
    return (
        <div className='bg-rose-600'>
            <AddTask></AddTask>
        
            <TaskList></TaskList>
            <TodoList></TodoList>
        </div>
    );
};

export default Todo;
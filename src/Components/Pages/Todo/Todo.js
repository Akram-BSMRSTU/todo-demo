import React from 'react';
import AddTask from './AddTask';

import TaskList from './TaskList';


const Todo = () => {
    return (
        <div className='bg-rose-600'>
            <AddTask></AddTask>
        
            <TaskList></TaskList>
            
        </div>
    );
};

export default Todo;
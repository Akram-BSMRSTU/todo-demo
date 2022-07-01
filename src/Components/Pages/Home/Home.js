import React from 'react';
import About from '../About/About';

import AddTask from '../Todo/AddTask';




const Home = () => {
    return (
        <div className='bg-rose-600'>
            <About></About>
            <AddTask></AddTask>
        </div>
        
    );
};

export default Home;
import React from 'react';
import Calender from '../Calender/Calender';
import Completed from '../Completed/Completed';
import Todo from '../Todo/Todo';


const Home = () => {
    return (
        <div>
            <Todo></Todo>
            <Completed></Completed>
            <Calender></Calender>
        </div>
        
    );
};

export default Home;
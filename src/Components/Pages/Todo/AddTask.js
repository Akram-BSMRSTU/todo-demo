import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import InputForm from './InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const [tasks, setTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(" https://bloc-crown-86209.herokuapp.com/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, [isReload]);


    const handleDelete = (id) => {
        

        fetch(` https://bloc-crown-86209.herokuapp.com/task/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                
                setIsReload(!isReload);
                toast.error("Removed todo!")
            });
    };


    const handlePost = (data) => {
        const title = data.title;
        const textData = data.description;

        

        fetch(" https://bloc-crown-86209.herokuapp.com/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify({ title, textData }),
        })
            .then((res) => res.json())
            .then((data) => {
                
                setIsReload(!isReload);
                document.getElementById("myForm").reset();
            });

    };

    return (
        <div className='mid-content bg-rose-600'>
            <div className='lg:w-9/12 mx-auto pb-5'>
                <InputForm handlePost={handlePost} />
                <div>
                    {tasks.map((task) => (
                        <TaskList
                            key={task._id}
                            task={task}
                            handleDelete={handleDelete}
                            setIsReload={setIsReload}
                            isReload={isReload}
                        />
                    ))}
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default AddTask;
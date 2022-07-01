import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from '../Todo/TodoList'

const Completed = () => {
    const [completeTasks, setCompleteTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch(" http://localhost:5000/complete-task")
            .then((res) => res.json())
            .then((data) => setCompleteTasks(data));
    }, [isReload]);


    const handleDelete = (data) => {
        const title = data.title;
        const textData = data.textData;

        

        fetch(" http://localhost:5000/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify({ title, textData }),
        })
            .then((res) => res.json())
            .then((data) => {
                
                setIsReload(!isReload);
            });


        fetch(` http://localhost:5000/complete/${data._id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                
                setIsReload(!isReload);
                toast.success("Opps, it is not completed yet!")
            });
    };


    return (
        <div className='mid-content bg-rose-600 pb-5 text-white'>
            <h1 className='font-bold text-4xl text-center py-5'>Completed Todo</h1>
            <div className='lg:w-9/12 mx-auto '>
                {completeTasks.map((task, index) => (
                    <div className='grid grid-cols-2 border p-5 shadow rounded-lg m-2 '>
                        <div className='flex w-full'>
                            <div className='mr-3'>
                                <p>{++index}. </p>
                            </div>
                            <div className=' flex'>
                                <p className='mr-2 font-bold'>{task?.title}-</p>
                                <p>{task?.textData}</p>
                            </div>

                        </div>
                        <div className='text-end'>
                            <div className='flex justify-end'>
                                <button className='btn btn-success btn-sm' onClick={() => handleDelete(task)}>Undone</button>
                            </div>
                        </div>
                        
                        <ToastContainer />
                    </div>
                ))}
                <TodoList />
            </div>
        </div>
    );
};

export default Completed;
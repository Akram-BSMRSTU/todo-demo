import React from 'react';
import { useForm } from "react-hook-form";

const InputForm = ({handlePost}) => { 
    const { register, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className='flex justify-center  items-center pt-5 mb-16'>
            <div className="mid-content card flex-shrink-0 w-full shadow-xl ">
                <div className="card-body bg-yellow-500 px-2">
                    <h1 className='text-3xl text-center text-black font-bold'>What's the Plan for Today?</h1>
                    <form onSubmit={handleSubmit(handlePost)} id="myForm">

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl text-black font-bold">Title:</span>
                            </label>
                            <input
                                type="text"
                                name='userName'
                                placeholder="Make it short!"
                                className="input input-bordered bg-rose-700 focus:outline-none"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Opps, you missed the title!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-black text-xl font-bold">Description:</span>
                            </label>
                            <input
                                type="text"
                                name="textData"
                                placeholder="Add detailed description"
                                className="input input-bordered bg-sky-800 focus:outline-none"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required!'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <button className='btn btn-success w-32'>Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;
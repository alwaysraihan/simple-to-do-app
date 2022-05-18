import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../Firebase/firebase.init";

const Task = () => {
    const [user] = useAuthState(auth);
    const [myTasks, setMyTasks] = useState([]);
    let todo = React.createRef();
    const [load, setload] = useState(false);
    const addItem = (e) => {
        const email = user.email;
        e.preventDefault();
        const todoTask = todo.current.value;

        const todoItem = { email, todoTask };

        // post data to server

        fetch("https://my-ossam-to-do-server.herokuapp.com/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(todoItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setload(!load);
                }
            });
    };
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://my-ossam-to-do-server.herokuapp.com/tasks?email=${user.email}`
            );
            const data = await response.json();

            setMyTasks(data);
        };
        getData();
    }, [user, load, todo]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `https://my-ossam-to-do-server.herokuapp.com/tasks/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("deleted successfully");
                        const remainingUsers = myTasks.filter(
                            (task) => task._id !== id
                        );
                        setMyTasks(remainingUsers);
                    }
                });
        }
    };
    return (
        <>
            <div className="px-5 md:px-10 lg:px-[10%] my-10 xl:px-[15%] ">
                <div className="bg-white shadow-md rounded overflow-hidden">
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className="px-5">
                                    <tr>
                                        <th></th>
                                        <th>Need To-Do</th>
                                        <th className="center"></th>
                                    </tr>
                                </thead>
                                <tbody className="px-5 ">
                                    {myTasks?.map((task) => (
                                        <tr
                                            className="justify-center items-center"
                                            key={task._id}
                                        >
                                            <th>1</th>
                                            <td className="w-full">
                                                {task.todoTask}
                                            </td>
                                            <td className="flex-shrink-0 center">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(task._id)
                                                    }
                                                    className="flex-shrink-0 bg-red-500 hover:bg-teal-700 border-red-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <form
                        onSubmit={addItem}
                        className="bg-gray-100 border-t border-t-1 border-color-grey mt-6 px-6 pt-6 pb-8"
                    >
                        <label
                            htmlFor="item"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Add To-Do Item
                        </label>

                        <div className="flex">
                            <input
                                type="text"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="todo"
                                name="todo"
                                ref={todo}
                                placeholder="Pick up groceries"
                            />

                            <input
                                type="submit"
                                value="Add To Do"
                                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Task;

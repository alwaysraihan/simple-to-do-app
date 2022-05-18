import React from "react";

const Task = () => {
    const addItem = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="px-5 md:px-10 lg:px-[10%] my-10 xl:px-[15%] ">
                <div className="bg-white shadow-md rounded overflow-hidden">
                    <div>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead className="px-5">
                                    <tr>
                                        <th></th>
                                        <th>Need To-Do</th>
                                        <th className="center"></th>
                                    </tr>
                                </thead>
                                <tbody className="px-5 ">
                                    <tr className="justify-center items-center">
                                        <th>1</th>
                                        <td className="w-full">Cy Ganderton</td>
                                        <td className="flex-shrink-0 center">
                                            <button className="flex-shrink-0 bg-red-500 hover:bg-teal-700 border-red-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
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
                                id="item"
                                name="item"
                                placeholder="Pick up groceries"
                            />

                            <input
                                type="submit"
                                value="Add Item"
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

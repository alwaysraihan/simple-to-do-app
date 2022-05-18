import React from "react";

const Loading = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <button type="button" className=" mt-5  ..." disabled>
                    <img
                        src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
                        alt="loading spinner"
                    />
                    <h1 className="text-xl text-blue-500">Loading...</h1>
                </button>
            </div>
        </>
    );
};

export default Loading;

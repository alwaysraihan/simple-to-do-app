import React from "react";
import Task from "./components/Task";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import Login from "./Authentication/Login/Login";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Task />
                        </RequireAuth>
                    }
                />
            </Routes>
            <ToastContainer />
        </>
    );
};

export default App;

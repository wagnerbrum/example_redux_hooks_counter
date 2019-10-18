import React, { useState, useEffect } from "react";

import "./style.css";
import FirebaseService from "../../services/firebase";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        FirebaseService.getDataList("tasks", data => setTasks(data));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        FirebaseService.addTask(title);
        setTitle("");
    };

    return (
        <>
            <br />
            <h2>TODO LIST ADD</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="titulo"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

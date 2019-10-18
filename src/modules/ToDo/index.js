import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import { onAddTask, onGetTask } from './reducer'
import "./style.css";

function Todo(props) {
    const [title, setTitle] = useState("");
    
    useEffect(() => {
        props.onGetTask()
    // eslint-disable-next-line 
    }, []);
    
    // eslint-disable-next-line 
    useEffect(() => {}, [props.todo.tasks]);

    const handleSubmit = e => {
        e.preventDefault();
        props.onAddTask(title);
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
                    {props.todo.tasks.map(task => (
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

export default connect(state => state, { onAddTask, onGetTask })(Todo)
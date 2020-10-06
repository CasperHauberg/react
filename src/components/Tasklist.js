import React from 'react';
import Task from './Task';

class Tasklist extends React.Component {



    render() {
        return (
            <div className="card mt-5">
                <div className="card-header">My Tasks:</div>
                <ul className="list-group list-group-flush">
                <Task />
                <Task />
                <Task />
                </ul>
            </div>
        )
    }
}

export default Tasklist
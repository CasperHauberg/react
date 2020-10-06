import React from 'react';

class Task extends React.Component {




    render() {
        return (
           <li className="list-group-item">Task Name<span className="text-danger">X</span></li>
        )
    }
}

export default Task;
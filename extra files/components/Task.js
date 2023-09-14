import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/Tasks';

function Task({ task, deleteTask, toggleTask }) {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default connect(null, { deleteTask, toggleTask })(Task);

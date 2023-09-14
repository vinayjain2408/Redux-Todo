import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/Tasks';

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask({ text: taskText, completed: false });
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default connect(null, { addTask })(AddTask);

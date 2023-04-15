import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from '../../app/components/Task';

function Tasks(props) {
  const [tasks, setTasks] = useState([]);



  return (
    <div className='tasks'>
      {Array.from(props.tasks).map(task => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default Tasks;
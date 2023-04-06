import React, { useState, useEffect } from 'react'
import { Pool } from 'pg'


module.exports = pool
function TaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const res = await pool.query('SELECT t_name FROM task');
      setTasks(res.rows.map((row) => row.t_name));
    }
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../../components/common/BackButton';

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState('');

  useEffect(() => {
    // Fetch tasks from the API when the component mounts
    fetchTasks();
  }, []);

  const addTask = () => {
    axios
      .post('http://localhost:3001/playground/todos', { task })
      .then((response) => {
        setMessage(response.data.message);
        setTask('');
        // Refresh the task list after adding a task
        fetchTasks();
      })
      .catch((error) => {
        setMessage('Failed to add task');
      });
  };

  const fetchTasks = () => {
    axios.get('http://localhost:3001/playground/todos').then((response) => {
      setTasks(response.data);
    });
  };

  const editTask = (taskId) => {
    axios
      .put(`http://localhost:3001/playground/todos/${taskId}`, {
        id: taskId,
        task: updatedTask,
      })
      .then((response) => {
        setMessage(response.data.message);
        setEditingTask(null);
        setUpdatedTask('');
        fetchTasks();
      })
      .catch((error) => {
        setMessage('Failed to edit task');
      });
  };

  const deleteTask = (taskId) => {
    axios
      .delete(`http://localhost:3001/playground/todos/${taskId}`)
      .then((response) => {
        setMessage(response.data.message);
        fetchTasks();
      })
      .catch((error) => {
        setMessage('Failed to delete task');
      });
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setUpdatedTask('');
  };

  return (
    <div>
      <BackButton />

      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <br></br>
      {message && <p>{message}</p>}
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {editingTask === t.id ? (
              <div>
                <input
                  type="text"
                  value={updatedTask}
                  onChange={(e) => setUpdatedTask(e.target.value)}
                />{' '}
                <button onClick={() => editTask(t.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                {t.task}{' '}
                <button onClick={() => setEditingTask(t.id)}>Edit</button>
                <button onClick={() => deleteTask(t.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListPage;

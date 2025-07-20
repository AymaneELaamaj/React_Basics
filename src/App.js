import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem'; // on le créera à l'étape 4

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h1>🧠 Smart To-Do</h1>

      <TaskForm onAdd={handleAddTask} />

      {tasks.length === 0 && <p>Aucune tâche encore. Ajoute ta première !</p>}

      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggle={() => toggleTask(index)}
          onDelete={() => deleteTask(index)}
        
          // onToggle et onDelete seront ajoutés à l'étape 4
        />
      ))}
    </div>
  );
}

export default App;

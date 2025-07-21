import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';


function App() {
  // const [tasks, setTasks] = useState([]);

  // const handleAddTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };
  
  // const toggleTask = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks[index].done = !newTasks[index].done;
  //   setTasks(newTasks);
  // };

  // const deleteTask = (index) => {
  //   setTasks(tasks.filter((_, i) => i !== index));
  // };

  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <nav>
          <Link to="/">Accueil</Link> |{" "}
          <Link to="/about">À propos</Link> |{" "}
          <Link to="/tasks">Tâches</Link>
      </nav>

        <hr />
  
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        </Routes>

      </div>
    </Router>
  );
  
}

export default App;

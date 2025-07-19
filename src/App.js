import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="App">
        <h1>Task Tracker  </h1>
        <Welcome name="aymane" />
        <UserForm onAddUser={handleAddUser} />
      
      {users.map((u, i) => (
        <UserCard key={i} name={u.name} isActive={u.isActive} />
      ))}
    </div>
  );
}

export default App;

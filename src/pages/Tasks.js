import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

function Tasks() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch('https://api.github.com/users')
          .then((res) => {
            if (!res.ok) throw new Error('Échec du chargement');
            return res.json();
          })
          .then((data) => setUsers(data))
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }, []);
      

  // 🔍 Filtrage
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>👥 Liste des utilisateurs GitHub</h2>

      <input
        type="text"
        placeholder="🔍 Rechercher un utilisateur..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      {loading && <p>⏳ Chargement en cours...</p>}
{error && <p style={{ color: 'red' }}>❌ Erreur : {error}</p>}
{!loading && !error && filteredUsers.length === 0 && (
  <p>🙁 Aucun utilisateur trouvé</p>
)}


      {filteredUsers.map((user) => (
        <UserCard key={user.id} login={user.login} url={user.html_url} />
      ))}
    </div>
  );
}

export default Tasks;

import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAddUser({ name, isActive });
      setName('');
      setIsActive(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Nom de l'utilisateur"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label style={{ marginLeft: '1rem' }}>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Actif ?
      </label>
      <button type="submit" style={{ marginLeft: '1rem' }}>Ajouter</button>
    </form>
  );
}

export default UserForm;

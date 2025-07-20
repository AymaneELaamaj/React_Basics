import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [name, setName] = useState('');
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      const nouvelleTache = {
        name: name.trim(),
        urgent: urgent,
        done: false
      };

      onAdd(nouvelleTache);

      // Réinitialiser les champs
      setName('');
      setUrgent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label style={{ marginLeft: '1rem' }}>
        <input
          type="checkbox"
          checked={urgent}
          onChange={(e) => setUrgent(e.target.checked)}
        />
        Urgente ?
      </label>
      <button type="submit" style={{ marginLeft: '1rem' }}>
        Ajouter
      </button>
    </form>
  );
}

export default TaskForm;

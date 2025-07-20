function TaskItem({ task, onToggle, onDelete }) {
    return (
      <div style={{
        backgroundColor: task.urgent ? '#ffe4e4' : '#e4f0ff',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '8px',
        textDecoration: task.done ? 'line-through' : 'none'
      }}>
        <h3>{task.name}</h3>
        <p>Urgent : {task.urgent ? '🔥 Oui' : '⏳ Non'}</p>
        <p>Statut : {task.done ? '✅ Terminé' : '🕓 En cours'}</p>
  
        <button onClick={onToggle}>
          ✔️ Marquer comme {task.done ? 'non terminé' : 'terminé'}
        </button>
  
        <button onClick={onDelete} style={{ marginLeft: '1rem' }}>
          🗑️ Supprimer
        </button>
      </div>
    );
  }
  
  export default TaskItem;
  
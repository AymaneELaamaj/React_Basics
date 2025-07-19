function UserCard({ name, isActive }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        background: isActive ? '#e0ffe0' : '#ffe0e0'
      }}>
        <h3>{name}</h3>
        <p>
          Statut : {isActive ? "✅ Actif" : "❌ Inactif"}
        </p>
      </div>
    );
  }
  
  export default UserCard;
  
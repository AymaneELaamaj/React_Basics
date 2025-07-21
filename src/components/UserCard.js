function UserCard({ login, url }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>{login} </h3>
      <a href={url} target="_blank" rel="noreferrer">Voir le profil GitHub</a>
    </div>
  );
}

export default UserCard;

  
  
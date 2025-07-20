import { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // empêcher le rechargement de la page
    if (nom.trim() && email.trim()) {
      const contact = { nom, email };
      onAddContact(contact); // on envoie le contact au parent
      setNom("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ContactForm;

import { useEffect } from 'react';

function Home() {
    useEffect(() => {
      console.log("🏠 La page d'accueil est affichée !");
    }, []); // 👈 le tableau vide signifie : "exécute une seule fois au chargement"
  
    return <h2>🏡 Bienvenue sur la page d'accueil</h2>;
  }
  
  export default Home;

//EXO 1

// Création de l'objet Personnage
const Personnage = 
{
  prenom: "John",
  santeMentale: 10,
};

// Liste de musiques
const musiques = ["Yosemite de Travis Scott", "Montagem Coral de DJ Holanda", "Sara perche ti amo de DJ Matrix", "Rupture de Livai", "Anissa - Wejdene"];

// Création de l'objet Trajet
const Trajet = 
{
  radio: musiques,
  feuxRouges: 30,
  changements: 0,
};

// Fonction pour simuler le trajet
function effectuerTrajet() 
{
  // Référence et lien avec le code html
  const outputElement = document.getElementById('output');
  // Création de la boucle
  for (let i = 0; i < Trajet.feuxRouges; i++) 
  {
    // Musique choisi de facon aléatoire dans la liste
      const musique = Trajet.radio[Math.floor(Math.random() * Trajet.radio.length)];
      //Lien avec html pour afficher le contenu
      outputElement.innerHTML += `<p>Musique jouée: ${musique}, Feux restants: ${Trajet.feuxRouges - i}</p>`;
      //Code pour savoir quoi faire en fonction de la musique et si la santé mentale est dead
      if (musique === "Anissa - Wejdene") 
      {
          Personnage.santeMentale -= 1;
          Trajet.changements += 1;
           //Lien avec html pour afficher le contenu
          outputElement.innerHTML += `<p>Santé mentale de ${Personnage.prenom}: ${Personnage.santeMentale}</p>`;
          
          if (Personnage.santeMentale === 0) 
          {
              outputElement.innerHTML += "<p>Explosion</p>";
              return;
          }
      }
  }
  //Message de fin
  outputElement.innerHTML += `<p>John est bien arrivé ! Il a fallu ${Trajet.changements} changements de taxi pour y arriver.</p>`;
}

effectuerTrajet();

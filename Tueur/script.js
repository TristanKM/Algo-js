//Exo2
//Creation du tueur
let jason = {
    nom: 'Jason',
    sante: 100,
    probMourir: 0.2,
    probInfligerDegats: 0.5,
    probMourirEnInfligeantDegats: 0.3,
};

//Creation des survivants
let survivants = [];
const caracteristiques = ['Nerd', 'Sportif', 'Blonde', 'Intelligent', 'Courageux'];


//Creation de la liste de prenom
const nomsSurvivants = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Helen', 'Ivy', 'Jack'];

//Fonction nom aleatoire
function getRandomName() {
    return nomsSurvivants[Math.floor(Math.random() * nomsSurvivants.length)];
}

//Fonction attribuation des caracteristiques au survivants choisi aleatoirement
function getRandomCharacteristic() {
    return caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
}

//Fonction pour ajouter un message au contenu HTML
function logMessage(message) {
    const output = document.getElementById('output');
    output.innerHTML += message + '<br>';
}

//Fonction qui permet d'ajouter des icons des resultats
function logResult(result) {
    const resultIcons = document.getElementById('result-icons');
    resultIcons.innerHTML += result;
}

//Fonction permettant de simuler l'attaque d'un survivants 
function attackSurvivant(survivant) {
    const attaqueResultat = Math.random();
    
    if (attaqueResultat <= jason.probMourir) {
        logMessage(`Jason a tué ${survivant.nom}`);
        return 'mort';
    } else if (attaqueResultat <= jason.probMourir + jason.probInfligerDegats) {
        logMessage(`${survivant.nom} a esquivé et a infligé 10 points de dégâts à Jason`);
        jason.sante -= 10;
    } else {
        logMessage(`${survivant.nom} a infligé 15 points de dégâts à Jason mais est mort en le faisant`);
        jason.sante -= 15;
        return 'mort';
    }
}

//Fonction permettant de simuler les attaques de Jason et de déterminer le résultat du jeu
function playRound() {
    for (const survivant of survivants) {
        if (jason.sante <= 0) {
            logMessage('Jason est mort');
            logResult('<i class="fas fa-trophy"></i>');
            logMessage('Les survivants ont gagné, RIP à ' + survivants.map(s => s.nom).join(', '));
            return;
        }
        const resultat = attackSurvivant(survivant);
        if (resultat === 'mort') {
            survivants.splice(survivants.indexOf(survivant), 1);
        }
    }

    if (survivants.length === 0) {
        logMessage('Les survivants ont perdu. Jason les a tous tués.');
        logResult('<i class="fas fa-skull"></i>');
    }
}

//Button permettant de commencer la chasse (start la boucle while)
document.getElementById('start-button').addEventListener('click', function () {
    jason.sante = 100;
    survivants = [];
    for (let i = 0; i < 5; i++) {
        survivants.push({ nom: getRandomName(), caracteristique: getRandomCharacteristic() });
    }
    logResult(''); // Réinitialiser les icônes de résultat
    logMessage('La chasse commence!');
    while (jason.sante > 0 && survivants.length > 0) {
        playRound();
    }
});

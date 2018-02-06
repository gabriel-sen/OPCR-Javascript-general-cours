/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombreEntree = Number(prompt("Veuillez entrer un nombre entre 1 et 100")); // Je récupère la valeure nombre
var iteration = 0; // Je déclare la valeure de base du nombre diteration
while (iteration <= 5) { // cette boucle s'executera si la valeure diteration est inferieur à 0+5=6
  iteration++ // a chaque execution une incrementation d'une unité sera éfféctuée
  if (nombreEntree > solution) { // si la valeure de nombreEntree est superieur à la valeure de solution alors on entre dans ce block
    console.log(nombreEntree + " est trop grand. Essaie n°: " + iteration + " sur 6" ); // la console affiche la concatenation suivante
    nombreEntree = Number(prompt("Veuillez entrer un nombre entre 0 et 100")); // et on redemande a l'utilisateur d'entrer une valeure
  } else if (nombreEntree < solution){ // si la valeure nombreEntree ne correspond aps au block précédant, elle peux correspondre à ce block
      console.log(nombreEntree + " est trop petit. Essaie n°: " + iteration + " sur 6");
      nombreEntree = Number(prompt("Veuillez entrer un nombre entre 0 et 100"));
    } else if (nombreEntree === solution){  // si la valeure nombreEntree est strictement égale à la valeure de solution
      console.log(nombreEntree + " Est la bonne réponse" ) // la console afiche la bonne réponse.
      } else { // si la valeure nombreEntree ne correspond aas aux deux  block précédant, elle n'est pas un chiffre
          console.log(nombreEntree + " n'est pas un nombre, recommencez");
        break; // on arrete le programme ici
        }
} console.log(nombreEntree + " perdu, recommancez"); // Si l'utilisteur fait une 6em fois une entrée on sort de la boucle while et on as perdu

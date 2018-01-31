var resultat = Number(prompt("Entrez la note ou la moyenne de l'élève. \nSi la note est superieur à 10/20 validera le diplome.")) ;
var nonRecu = (resultat > 0 ) && (resultat < 10) // Le résultat est compris en 0 et 10
var moyenne = (resultat > 0 ) && (resultat >= 10) && (resultat < 12) ; // Le résultat est plus grand que zero ET plus grand ou égale à 10 mais plus petit que 12
var mention = (resultat > 10 ) && (resultat >= 12) && (resultat <= 20) ; // le résultat est superieur à 10 ET superieur ou égale à 12 ET  inférieur ou égale à 20
if (moyenne){
  alert("Le résultat est de " + resultat + " L'élève est reçu.");
} else if (mention) {
  alert("Le résultat est de " + resultat + " Félicitation L'élève est reçu Avec mention.");
} else if (nonRecu){
  alert("L'élève est recalé.");
} else{
  alert( "Abuse pas non plus")
}

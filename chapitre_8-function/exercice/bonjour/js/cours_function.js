function direBonjour () { // On déclare le programme
    console.log("Bonjour !"); // Ce qu'il fait.
} // finde la déclaration

console.log("début du programme");
direBonjour(); // on appel le programme.
console.log("fin du programme");

// Ce qui est utile dans une fonction c'est qu'elle permet d'utiliser le programme plusieurs fois au lieux de le re-écrire on utilise juste le nom de la fonction. Exemple :
// même exemple que précédamment.

function  direBonjour() {

  // Return est la dernière ligne du programme d'une fonction, les lignes écrites apr!s ne seront pas éxécutés.
  return "Bonjour !! "; // valeur retour, il y en astoujours une. Elle peux etre de tout types, Number, String...  Sans le return on obtiens la valeur Undefined. Une fonction qui ne renvois pas de valeurs est parfois appelé une procédure
}

var resultat = direBonjour(); // on le stock dans une variable
console.log(resultat) // on logg la varaible


// Si on simplifie

function direBonjour () {
  return "Bonjour !! ";
}

console.log(direBonjour()); // on appel directement la fonction.

// les variables déclarés dans les function sont nommés CVariables locales elles ne peuvent être utilisé que dans la focntion.

// Parametres : déclaré juste après le nom de la fonction, dans les parenthèses
// arguments : assigné au paramètre au moment de l'appel. Exemple :

function direBonjour(prenom) { // on déclare le parametre
  var message = "Bonjour , " + prenom + " !";// la variable ets on action
  return message //la fonction retourne la variable
}
console.log(direbonjour("Gabriel")); // on appel et assigne à la fonction un argument
console.log(direBonjour("Esther")); // on re-utilise la fonction et on re assige un nouvel argument à cette fonction.


// je peux mettre plusieurs arguments à condition de placer plusieurs parametres et je dois respecter l'ordre d'asignement.

function direBonjour(prenom, nom) {
  var message = "Bonjour" + prenom + nom + " !";
  return message ;
}

console.log(direBonjour("Gabriel, ", "Sen"))

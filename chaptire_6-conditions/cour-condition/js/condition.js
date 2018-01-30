var nombre = Number(prompt("Entrez un nombre : ")); // La variable nombre est égale à une valeurs de  type nombre obtenu par le prompt.
if (nombre > 0) { // SI la valeur stocké dans la variable nombre obtenue par le formulaire du prompt est unférieur à zero, alors
  console.log( nombre + " Est un nombre positif"); // la console doit m'afficher le nombre stockée et le string (puisque qu'une valeur de type nombre ne peux pas être aditionné à un string)
}

if (true)/* on lui attribue une valeure boléenne */{
  // IF est toujours vraie les instructions contenue dans ce bloc seront toujours éxécutés.
}

//A CONNAITRE PAR COEUR - Liste d'operateurs et leurs significations
valeure0 = valeure0 // Il s'agit d'un operateur d'affectation il ne doit pas être utilisé en guise d'operateurs.
valeure1 === valeure2 // strictement égale à
valeur3 !== valeure4 // différent de
valeure5 < valeure6 // inférieur à
valeure7 <= valeur8 // inférieur ou égale à
valeur9 > valeur10 // Superieur à
valeur11 >= valeur12 // superieur ou égale à


//Exemple

var nombre = Number(prompt("Entrez un nombre : "));
if (nombre >= 0) {
  console.log( nombre + " Est un nombre positif ou nul");
}


// EXPRIMER UNE ALTERNATIVE

var nombre = Number(prompt("Veuillez indiquer un nombre")) ;
if (nombre > 0) {
  console.log(nombre + " Est un nombre positif");
} else { // else est en Js ce qu'on appelle une Alternative
  console.log( nombre + " Est un nombre négatif");
}




var nombre = Number(prompt( " Veuillez indiquer un nombre : " ));
if (nombre > 0) { // Si la valeur nombre est superieure à 0
  console.log(nombre + " Est positif");
} else{ // Si il est inférieur à 0
  if (nombre < 0) { // Si il est plus petit que zero
    console.log(nombre + " Est négatif");
  } else{ // Sinon c'est qu'il est strictement égale à zero ===
    console.log(nombre + " Est null");
  }
} // Ce programme est explicable sous forme d'un diagramme de flux très simplemeent.


var nombre = Number(prompt( "veuillez indiquer une valeure :"));
if(nombre > O){
  console.log(nombre + " Est un nombre positif");
} else if(nombre< 0){
  console.log(nombre + " Est négatif");
} else {
  console.log(nombre + "est null");



// LA CONDITION ET &&

var nombre = Number(prompt(" Veuillez entrer une valeur pour vois si elle est comprise entre 0 et 100"));
if ((nombre >= 0) && (nombre <=100)){
  console.log(nombre + "Est compris entre 0 et 100");
}else {
  console.log(nombre + "N'est aps compris entre 0 et 100")
}

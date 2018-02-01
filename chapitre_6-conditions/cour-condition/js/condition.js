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
valeure13 && valeure14 // operateur ET si la valeure13 et la 14 sont true alors le résultat est true sinon false
valeur15 || valeure16 // choix entre l'un OU l'autre c'est un operateur de comparaison.
! (valeure17) > (valeure18) // ! est un operateur non. In inverse la valeure soit d'une variable soir d'un operateur.

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



// L'OPERATEUR ET &&

var nombre = Number(prompt(" Veuillez entrer une valeur pour voir si elle est comprise entre 0 et 100"));
if ((nombre >= 0) && (nombre <=100)){
  console.log(nombre + "Est compris entre 0 et 100");
}else {
  console.log(nombre + "N'est aps compris entre 0 et 100")
}

// L'opérateur  && as comme résultat la valeure true uniquement si les deux valeurs qu'il met en corelation sont true.



// LA CONDITION LOGIQUE OU || (shift + alt + l = ||sur mac)

var nombre = Number(prompt("Entrez un nombre : "));
if((nombre < 0) || (nombre >100)){ // imaginez que vous souhaitez vérifier si un nombre est plus petit que 0 ou plus grand que 100
  console.log("Votre nombre est en dehors de la fourchette de O à 100")
} else {
  console.log(nombre + " Est compris entre 0 OU 100")
}
// L'opérateur || as comme valeure true  si au minimum une des deux valeurs vaux true.



// L'OPERATEUR ! Sinon
var nombre = Number(prompt( "Entrez une valeure"));
if(!(nombre >100)){ //! il inverse la valeur true deviens false. Plus grand que deviens plus petit que.
  console.log(nombre + " est plus petit que 100 ")
} else {
  console.log(nombre + " est plus grand que 100")
}
// Cette operateur inverse les vérités des valeurs pour lesquels il est employé.


var meteo = String(prompt( "Quel temps fait-il dehors ? \nChoix possible : vent, chaud, froid"));
if(meteo === "vent" ){
  console.log(alert("Mettez de quoi vous protéger du vent"));
} else if(meteo === "chaud" ) {
  console.log(alert("Sortez en t-shirt"));
}else if(meteo === "froid" ){
  console.log(alert("habillez vous chaudementc ar il fait très froid ! "))
} else {
  console.log(alert(" Veuillez utiliser imperativement les mots: \n- vent \n- chaud \n- froid"))
}
// Ici on fait appel plusieurs fois à la valeurs qu'on fait analyser et on fait exploiter son résultat. Or, il y as une autre façon de faire. Le Switch Il permet d'affilier des "cas" à traiter pour une seul valeure.

// le SWITCH (je viens de comprendre alors que code academy c'étais pas sic laire.)
var meteo = String(prompt("Quel temps fait il dehors ?\n- soleil \n- pluie \n- froid"));
switch (meteo) {
  case "soleil" :
    alert("Sortez en t-shirt");
    break;
  case "pluie" :
    alert(" Prennez un parapluie");
    break;
  case "froid" :
    alert("sortez couvert, il caille");
    break;
  default: // il prends la place du else dans l'exemple précédant
    alert(" Veuillez utiliser imperativement les mots: \n- soleil \n- pluie \n- froid");
}

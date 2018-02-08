// Renvoie le carré d'un nombre
function carre(x) { 
  var resultat = x * x;
  return resultat;
}


var iteration = 1;
var value = 1;

for (var iteration = 1; iteration <=10; iteration++) {
  value ++;
  console.log(carre(value));
}

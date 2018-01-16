// TODO : écrire la fonction calculer()

function calculer(opGauche, operation, opDroite){
  var resultat;
  switch (operation){
    case "+":
    resultat = opGauche + opDroite;
    break;
    case "-":
    resultat = opGauche + opDroite;
    break;
    case "*":
    resultat = opGauche + opDroite;
    break;
    case "/":
    resultat = opGauche + opDroite;
    break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity

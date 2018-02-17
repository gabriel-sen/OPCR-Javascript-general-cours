// Les prototypes :


var unObjet = {
  a:2
};


var unAutreObjet = Object.create(unObjet); // On créer un objet "unAutreObjet" avec comme propriété l'objet "unObjet"
console.log(unAutreObjet.a); // on logg la propriété .a de "unObjet" a travers "unAutreObjet"
// Si la propriété a n'esistais pas la valeur retourné aurait été "undefined"
// On peux répéter ce chéma à l'infinie.
var encoreUnAutreObjet = Object.create(unAutreObjet);
console.log(encoreUnAutreObjet.a); //Ce mode de relation est appelé une Délégation.

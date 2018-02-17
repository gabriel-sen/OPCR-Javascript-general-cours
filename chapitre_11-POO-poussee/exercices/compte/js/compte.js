var solde = 0;  // le compte est initialement de 0
var entree = Number(prompt("Entrez une somme à créditer sur un compte à actuellement : " + solde + " €" )); // on récupère une valeure

var compteAlexCrediter = { // Cette objet est le compte à créditer
  titulaire:"Alex",
  crediter: solde + entree, // cette propriété crédite le solde
  crediterSolde : function () {
    var descriptionCredit = "Titulaire "+ this.titulaire + " , solde : " + this.crediter + " euros.";
    return  descriptionCredit;
  }
};

var solde = compteAlexCrediter.crediterSolde; // on attribue le résultat de compte crédité à la valeure de solde qu'on s tock

var entree = Number(prompt("Entrez une somme à débiter sur un compte à actuellement : " + solde + " €" )); // on entre une nouvelle donnée à stocker

var compteAlexDebiter = {
  titulaire:"Alex",
debiter: solde - entree, // cette propriété décrédite le solde
debiterSolde : function () {
  var descriptionCredit = "Titulaire "+ this.titulaire + " , solde : " + this.debiter + " euros."; // il reste sur le compte
  return  descriptionCredit;
}
};
console.log(compteAlexDebiter.debiterSolde()); // on affiche ce qu'il reste sur le compte.

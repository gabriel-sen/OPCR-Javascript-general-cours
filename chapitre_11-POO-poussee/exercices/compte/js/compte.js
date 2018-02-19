// TODO : ajoutez ici la définition des objets nécessaires
var compteBancaire =  {
  initCB: function(nom, solde,montant) {
    this.nom = nom;
    this.solde = solde;

  },
  decrire: function(){
    var solde = console.log("Solde banque de "+this.nom+" solde Epargne est de : " + this.solde  );
  },
  crediter: function (montant) {
      this.solde = this.solde + montant;
  },
  // Débite le compte d'un certain montant
  debiter: function (montant) {
      this.solde = this.solde - montant;
  },
};

var CompteEpargne = Object.create(compteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};

var compte1 = Object.create(compteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());


// PROTOTYPE PERSONNAGE
var Personnage = {
  // initialisation du Personnage
  initPerso: function(nom, sante, force){
    this.nom = nom;
    this.sante = sante;
    this.force = force;
  }
};


// PROTOTYPE PERSONNAGE
var Joueur = Object.create(Personnage);
  // Initialise le joueur
  Joueur.initJoueur = function (nom, sante, force){
    this.initPerso(nom, sante, force);
    this.xp = 0; // xp initialement de zero
  };

// Renvoyer la description du Joueur
Joueur.decrire = function(){
  var description = this.nom + " a " + this.sante + " points de vie, " +
      this.force + " en force et " + this.xp + " points d'expérience";
  return description;
};


// ADVERSAIRE

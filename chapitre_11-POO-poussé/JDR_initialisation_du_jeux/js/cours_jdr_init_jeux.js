
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
var Adversaire = Object.create(Personnage);
// Initialise l'Adversaire
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};

// maintenant on créer les personnages en donnant les valeurs.

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 100, 50);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Gladius", 150,150);


// on initie la partie
console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :")
console.log(joueur1.decrire());
console.log(joueur2.decrire());


// donne aussi les valeurs au mosntre
var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 50, 20, "orc", 10);
console.log(" Un affreux monstre arrive, c'est un " + monstre.race + "nommé " + monstre.nom);

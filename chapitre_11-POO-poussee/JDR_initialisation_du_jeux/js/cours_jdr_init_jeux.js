
// PROTOTYPE PERSONNAGE
var Personnage = {
  // initialisation du Personnage
  initPerso: function(nom, sante, force){
    this.nom = nom;
    this.sante = sante;
    this.force = force;
  },
  // On ajoute l'attaque
  attaquer: function (cible) {
    if (this.sante >0){
      var degats = this.force;
      console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
      cible.sante = cible.sante - degats;
        if (cible.sante >0){
          console.log(cible.nom + " a encore" + cible.sante+ " points de vie");
        } else {
          coble.sante = 0;
          console.log(cible.nom + " est mort ! ");
        }
    } else {
      console.log(this.nomm + " ne peut pas attaquer : il est mort... ")
    }
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

// COmbat adversaire
Joueur.combattre = function(adversaire){
  this.attaquer(adversaire);
  if (adversaire.sante === 0){
    console.log(this.nom + " à tué " + adversaire.nom + " et gagne " + adversaire.valeur + "  points d'experience");
    this.xp += adversaire.valeur;
  }
}

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
joueur1.initJoueur("Aurora", 100, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Gladius", 150,30);

// on initie la partie
console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

// donne aussi les valeurs au mosntre
var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log(" Un affreux monstre arrive, c'est un " + monstre.race + " nommé " + monstre.nom);
monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);
console.log(joueur1.decrire());
console.log(joueur2.decrire());

// Combat !

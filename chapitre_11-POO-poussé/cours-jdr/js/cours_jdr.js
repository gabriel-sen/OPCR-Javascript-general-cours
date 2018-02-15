var Personnage = { // le template du personnage contient des propriété vides parce qu'on (2)
  nom : " ",
  sante : 0,
  force : 0,
  xp : 0,
  decrire : function(){
    var description = this.nom + "a " + this.sante + " points de vie , " + this.force  + " en force et " + this.xp + " points d'experience";
    return description;
  }

};

var perso1 = Object.create(Personnage); // (2) assigne les valeurs des propriétés ici
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;
perso1.xp = 10;

var perso2 = Object.create(Personnage);
perso2.nom = "Gladius";
perso2.force = 130;
perso2.xp = 10;


console.log(perso1.decrire()); // on logg la description du template, d'ou l'utilité de ".this"
console.log(perso2.decrire());

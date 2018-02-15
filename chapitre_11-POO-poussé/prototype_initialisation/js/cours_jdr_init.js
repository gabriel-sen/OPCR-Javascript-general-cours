var Personnage = { // on créer le prototype

  init: function (nom, sante, force) { // initialisation du Personnage. Imagine que tu met au monde un bébé. (2)
    this.nom = nom; // la propriété "nom" du personnage aura comme attribution la valeur déclaré par les futurs variables implémentés par les parenthèses de la fcontion.
    this.sante = sante; // idem
    this.force = force; // idem
    this.xp = 0; // idem "0" est sa base. On l'itnitie nule.
  }, // fin de l'initialisation du Personnage  ATENTION A LA VIRGULE

  decrire:function(){ // La description du personnage
    var description = this.nom + " a " + this.sante + " Nombre de points de vie, " + this.force + "en force, " + this.xp + "en exepreience "
    return description;
  } // fin de la description
};  // fin du prototype


// on créer le personnage ici.
var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25); // (2) voici les valeurs de la fonction

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);


console.log(perso1.decrire());
console.log(perso2.decrire());

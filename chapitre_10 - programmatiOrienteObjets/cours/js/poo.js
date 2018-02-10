var stylo = { // mon premier objet
  type: "bille", // voici ses propriétés
  couleur: "bleu",
  marque: "bic"
}; // on oublie pas le petit point virgule

// Pour utiliser un objet nous devons utiliser la notation pointée. c'est tout bete :

console.log(stylo.type) // pour appeler la propriété type par exemple.
// mais il existe d'autre syntaxes pour accéder aux propriétés.
console.log(stylo['type']); // il affiche "bille". Cette syntaxe est moins utilisé que la notation pointée.

// il estpossible d'utiliser les proprétés de l'onjet dans plusieurs situation comme par exeple dans une phrase.

var ciel = {
  couleur: "bleue",
  type:"nuageux"
};
console.log("ce ciel est vachement "+ ciel.couleur+" et il est aussi très "+ciel.type);


// il est possible de modifier la valeure d'une propriété de l'objet très facilement.

var cielNamek = {
  couleur: "vert",
  type:"orageux"
};
console.log("Le ciel de la planete Namek est vachement "+ cielNamek.couleur +" et il est aussi très "+cielNamek.type);

cielNamek.couleur = "rouge" // modifie la couleur du ciel de Namek

console.log("Ho non! je suis daltonien :-( Le ciel de la planete Namek est vachement "+ cielNamek.couleur +" et il est aussi très "+cielNamek.type);

// on peux aussi ajouter des propriétés à un objet déja crééé.

cielNamek.prix = 2.5; // la propriété n'existe pas dans l'objet elle est ajouté.

console.log("Le prix d'un voyage vers namek est de "+ cielNamek.prix + "€")

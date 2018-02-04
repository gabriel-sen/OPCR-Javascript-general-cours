// LA BOUCLE WHILE = tant que la condition n'est pas atteinte la boucle continue.

var nombre = 1;
while (nombre <= 5) { // tant que nombre est plus petit ou égale à 5 il :
  alert(nombre); // m'affichera nombre
  nombre++ // en ajoutant +1 à chaque fois  NE JAMAIS L'OUBLIER sinon ça créer une boucle infinie
}


// LA BOUCLE FOR = La boucle for possède la valeur de la variable dans le corp de la boucle.

var nombre;
for (compteur = 1 /* initialisation */; compteur <= 5 /* condition */; compteur++) /* étape */) { // compteur as comme valeur = 1 nous entrons dans laboucle et affichons 1; compteur est inférieur ou égale à 5 ; alors nous lui incrémentons 1 et entrons dans la boucle. Ainsi de suite jusqu'à 6
  console.log(compteur);  // une initialisaion qui as lieux une seul fois au début de l'éxé, une condition évalué (true/ false) au début de chaque tours ; et une étape élaboré à chaque tours.
  // on incrémente jamais rien ici, dans la bocle for c'est dans la partie "étape" de ton operation de la boucle que tu travail.
}

// on nome souvent la variable d'une boucle "i" par convention.
// On as pas toujours besoin d'écrire une variable en dehors de la boucle for, on peux l'écrire directement dans la boucle.

for (var i = 0; i < 5; i++) {
  console.log(i)
}


// COmment choisir entre la boucle FOR ou While? - While est utile quand on ne sais pas le nombre de loop que doit faire la boucle par exemple si un utilisateur doit entrer un nombre indéfini de fois une information:

var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}

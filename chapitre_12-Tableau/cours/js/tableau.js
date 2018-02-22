var films = ["Le loup de Wall Street", "Vice-Versa", "Babystitting"];
// Retourner le nombe de films

console.log(films.length);

// Les tableaux peuvent stocker plusieurs informations de differents types :
var tab = [ "Bonjour", 7, true]

//on peux savoir le nombre d'élements dans le tableau via la propriété .length

var films = ["le loup de Wallstreet", "vice-versa", "Babystitting"];
console.log(films.length)

// Un tableau vide affichera 0 exemple :
var filmeVide = [];
console.log(filmeVide.length);

// Le décompte commence pas à 1 mais à 0
var mesFilms = ["Deadpool", "Pokemon", "Tencendance"];
console.log(mesFilms[0]); // Affiche Deadpool
console.log(mesFilms[1]); // Affiche Pokemon
console.log(mesFilms[2]); // Affiche Tendance


// RETOURNER LES ELENTS :
// Pour automatiser l'affichage des films

var filmsLoop = ["Deadpool 2", "Pokemon 2", "Tencendance 2"];
for (var i = 0; i < filmsLoop.length; i++) {
    console.log(filmsLoop[i]);
}

// La methode forEach() permet d'appliquer une fonction sur chaque éléments du tableau.

var filmElements = ["le loup de Wallstreet", "vice-versa", "Babystitting"];
filmElements.forEach(function(film){
    console.log(film);
});

// Ajouter des elements au tableau via  la methode .push
var filmsPush = ["Deadpool 2", "Pokemon 2", "Tencendance 2"];
filmsPush.push(" Les bronzés")
console.log(filmsPush[3])


//


var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);


// ...

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});

let a = 3.14;
console.log(a);

//Incrémenter une variable de type nombre

var b =0;
b+= 1; //+1
b ++; //+1
console.log(b) //2


//La notion d'expression
// Une expression c'est quand on combine des variables. des valeurs avec des opérateurs. Le calcule de la valeur de l'opération s'appel l'évaluation.
// l'expression C as comme valeur 3
var c = 3;
// d est une autre expression dont la valeur est égale à c
var d = c;
// (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; // d contient la valeur 4
console.log(d); // Affiche 4


// ne pas oublier les parenthèses permettent de prioriser une évaluation

var e = 3 + 2 * 4; // 11
e = (3+2)*4; //20


//Conversions de types
var f = 100;
console.log("bonjour vous me devez " + f)

// concatenation (string/ number)

var h = "5";
console.log(h + 1); // la concatenation ajoute la valeur de h qui est un string de 5 au number 1 ce qui donne 51
// Si je souhaite transformer mon sting en number je dois utiliser l'ordre Number()
h = number("5");
console.log(h+1); // h est devenu un number


// Interactions avec l'utilisateur prompt() et alerte()
var prenom = prompt("Entrez votre prénom :"); // la variable prenom stock la valeure entrée dans le prompt
alert("Bonjour, " + prenom); // la variable prom renvoi le prenom stocké précédamment

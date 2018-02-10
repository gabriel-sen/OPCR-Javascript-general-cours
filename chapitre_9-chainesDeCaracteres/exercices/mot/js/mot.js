var mot = "anaconda" ;
var nombreCaracteres = mot.length;
var motMajuscules = mot.toUpperCase();
var motMinuscules = mot.toLowerCase();

// Renvoie le nombre de voyelles d'un mot
function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}


console.log ("le mot "+ mot +" contiens "+ nombreCaracteres + " Caractères."  );
console.log ("le mot "+ motMajuscules +" en majuscules"  );
console.log ("le mot "+ motMinuscules +" en minuscules"  );


var compterNbVoyelle = compterNbVoyelles ( mot );
console.log ("le mot "+ mot +" contiens " + compterNbVoyelle + " voyelles." );

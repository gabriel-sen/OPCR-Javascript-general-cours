var prix = prompt("Indiquez votre prix");
var tva = 19.6;
var resultatTva = (Number(prix) / 100) * Number(tva) ;
var resultat = Number(resultatTva) + Number(prix) ;

alert( "votre TVA est de " + Number(resultatTva) + " euros \n Votre prix TTC est de " + Number(resultat));

// N'OUBLIE PAS QUE NUMBER LE N EST UNE MAJUSCULE

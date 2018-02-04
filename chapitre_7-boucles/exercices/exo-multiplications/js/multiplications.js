for (multiple = Number(prompt( "Saisir un nombre à multiplier ente 1 et 9")), (multiplicateur = 1) ; ((multiple >= 1) && (multiplicateur >= 1) && (multiple <= 10) && (multiplicateur <= 10)); multiplicateur++) {
    result = (multiple * multiplicateur);
    console.log ( multiple + " X " + multiplicateur + " = " +  result);
}

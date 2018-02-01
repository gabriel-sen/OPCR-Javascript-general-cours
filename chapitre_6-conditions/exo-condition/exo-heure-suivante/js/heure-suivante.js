var heures = Number(prompt("Entrez une heure."));
var minutes = Number(prompt("Entrez une minute."));
var secondes = Number(prompt("Entrez une seconde."));

  if ((secondes <= 59)) {
    secondes++;
  }
  if ((secondes > 59)){
    secondes = 0;
    minutes++;
  }
  if ((minutes > 59)) {
    minutes = 00;
    heures++;
  }
  if ((heures > 23)) {
    heures = 00;
  }

  alert( "dans une seconde il sera " + heures + " h " + minutes + " min " + secondes + " s " );



// v2 avec erreur

  var heures = Number(prompt("Entrez une heure."));
  var minutes = Number(prompt("Entrez une minute."));
  var secondes = Number(prompt("Entrez une seconde."));

  if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
  (secondes >= 0) && (secondes <= 59)) { // on déclare les erreurs possibles
    if ((secondes >= 0 ) && (secondes <= 59)) { // entre 0 et 59, seconde ajoute +1
      secondes++;
      if ((secondes === 60)){ // si seconde est égale à 60 il retombe a zero mais ajoute +1 a minutes
        secondes = 0;
        minutes++;
        if ((minutes === 60)){ // si minutes arrive à 60 il retombe a zero et ajoute +1 a heure
          minutes = 0;
          heures++;
          if ((heures > 23)) { // si heure atteint 23, il retombe a zero
            heures = 00;
          }
        }
      }
    }
    alert( "dans une seconde il sera " + heures + " h " + minutes + " min " + secondes + " s " );
  }
  else{ // sinon, il n'aura pas respecté les règles.
    alert("veuillez entrer des valeurs entre 0 et 59, merci")
  }

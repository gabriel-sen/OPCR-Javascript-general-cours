for (var i = Number(prompt(" Entrez une valeure en dessous de 10 pour savoir si les suivants sont ou pas pair")); i <= 10; i++) {
  if (i % 2 ===0) { // modulo permet de déterminer si le modulo de la division est ou n'est pas égale à 0 si oui il affiche la console.log d'FI sinon il passe sur Else
    console.log(i + " Est un chiffre pair")

  } else{
    console.log (i + " N'est pas un chiffre pair")
  }
}

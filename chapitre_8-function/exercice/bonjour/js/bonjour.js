function direBonjour (prenom, nom) {
  var message = "Bonjour " + prenom + " " + nom + " !";
  return message;
}
alert(direBonjour(prompt("Quel est votre prénom?"), prompt("Quel est votre nom ?")))

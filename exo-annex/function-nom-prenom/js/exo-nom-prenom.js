// Exercice récupérer le prénom et le nom et l'envoyé dans une fonction qui print une phrase de bienvenue
function direBonjour(prenom, nom){
  let message = alert("Bonjour, " + prenom + " " + nom + " !");
  return message;
}

console.log(direBonjour(prompt("Bonjour, Quel est votre prénom?") , prompt("Bonjour, quel est votre nom?")));

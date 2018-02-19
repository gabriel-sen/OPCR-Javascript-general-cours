// TODO : ajoutez ici la définition de l'objet chien
var chien ={
  nom: "Spyke",
  race: "Tekel",
  taille: 30,
  aboyer: function(){
    var aboiement = "woof-woof !";
    return aboiement;
  }
}


console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

var r = Number(prompt("Entrez le rayon d'un cercle :"));
// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
  perimetre : function(){
    var perimetreResultat = 2* Math.PI * r;
    return perimetreResultat;
  },
  aire : function(){
    var aireCalcule = Math.PI * (r*r);
    return aireCalcule;
  }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

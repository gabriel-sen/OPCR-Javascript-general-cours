function aire(rayon){
  aireCercle = (rayon*rayon)*Math.PI;
  return aireCercle ;
}

console.log(aire(prompt("Entrez le rayon de votre cercle pour calculer l'aire")));


function perimaitre(diametre){
  perimetreCercle = diametre*Math.PI;
  return perimetreCercle ;
}

console.log(aire(prompt("Entrez le diametre de votre cercle pour calculer son perimetre")));

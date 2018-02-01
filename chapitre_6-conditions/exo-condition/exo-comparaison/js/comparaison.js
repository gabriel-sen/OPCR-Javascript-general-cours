var nombre1 = Number(prompt("Entrez le nombre 1 ou 2")); // Je récupère la valeure de 1
var nombre2 = Number(prompt("Entrez le nombre 2 ou 1")); // Je récupère la valeure de 2


if (nombre1 <= nombre2){
  alert(nombre1 + " Est plus petit que " + nombre2);
} else if (!(nombre1 <= nombre2)){
  alert(nombre1 + " Est plus grand que " + nombre2);
} else {
  alert("");
}

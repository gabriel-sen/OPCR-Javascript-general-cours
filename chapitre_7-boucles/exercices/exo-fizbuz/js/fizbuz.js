// écrire un programme qui affiche fizz aux mutiples de 3 et buzz aux multiples de 5 et fizz buzz aux multiples de 3 et 5.

for (var nombre = 1; nombre <=100; nombre++) { // affiche moi des chiffres de 1 à 100 (else)
  if ((nombre % 3 === 0) && (nombre % 5 === 0)){ // les chiffres divisibles  de 3 et 5 afficherons fizz-buzz
    console.log("fizz- buzz");
  }else if (nombre % 3 === 0){ // les divisibles de 3 afficherons fizz
    console.log("fizz");
  } else if (nombre % 5 === 0){ // les divisibles de buzz afficherons buzz
    console.log("buzz");
  } else{  
    console.log(nombre);
  }
}

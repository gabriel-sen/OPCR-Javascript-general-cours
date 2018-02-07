function carre(x) {
    return x * x;
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (var valeur = 0; valeur <= 10; valeur++) {
    console.log(carre(valeur));
}

// Si la valeure est le 4
var nb1 = Number(prompt("Entrez nb1 :")); //0    4
var nb2 = Number(prompt("Entrez nb2 :")); // 4    36
var nb3 = Number(prompt("Entrez nb3 :")); // 12    2

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}


// Si nb1=4, nb2=3, nb3=2
var nb1 = Number(prompt("Entrez nb1 :")); // 4
var nb2 = Number(prompt("Entrez nb2 :")); //  3
var nb3 = Number(prompt("Entrez nb3 :")); // 2

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}

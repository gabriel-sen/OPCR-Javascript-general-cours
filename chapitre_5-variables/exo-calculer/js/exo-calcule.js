var a = 2; // 2
a = a - 1; // 1
a++ ;//+1
console.log(a) // 2


var b = 8; // 8
b += 2; // 10
console.log(b) // 10

var c = a + b * b;
console.log(c) // 102


var d = a * b + b;
console.log( "d = " + d) // nan   


var e = a * (b + b); // 40
console.log(e)
var f = a * b / a; // 10
console.log(f)
var g = b / a * a; // 2.5
console.log(g)

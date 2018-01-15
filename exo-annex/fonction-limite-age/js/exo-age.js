function accesSite(){
  let ageLimite = prompt("HQuel age as tu ?");
  if (ageLimite >= 18){
    var yes = " Ok, tu as l'age pour conduire ! " ;
  } else {
    var no = "Non, tu n'as aps l'age pour conduire !" ;
  }
  let message =  "En France :" +  (yes || no) ;
  return message
}

alert(accesSite());

/*  PLUS PROPRE SOUS VARIABLES
function accesSite(){
    let ageLimite = prompt("How old are you ?");
    var canDrive = "";
    if (ageLimite >= 16){
        canDrive = " Ok, you can drive ! " ;
    } else {
        canDrive = "No, you can't drive!" ;
    }
    let message =  "Can you drive ?" +  canDrive ;
    return message
}

alert(accesSite());
*/

function accesSite(){
  let ageLimite = prompt("How old are you ?");
  if (ageLimite >= 16){
    var yes = " Ok, you can drive ! " ;
  } else {
    var no = "No, you can't drive!" ;
  }
  let message =  "Can you drive ?" +  (yes || no) ;
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

// Les prototypes :


var unObjet = {
  a:2
};

// Crée unAutreObjet avec unObjet comme prototypes
var unAutreObjet = Object.create(unObjet);
console.log(unAutreObjet.a);
//Dans cet exemple, l'instruction JavaScriptObject.create() est utilisée pour créer l'objetunAutreObjet en lui donnant comme prototype l'objetunObjet. Lors de l'appel àunAutreObjet.a, c'est la propriétéa deunObjet qui est utilisée puisque la propriétéan'existe pas dansunAutreObjet.

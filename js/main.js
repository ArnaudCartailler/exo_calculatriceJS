
function verification(ajout) {

  var all ="1234567890[]()+-.*,/";

  for (var i = 0; i < ajout.length; i++){

  if (all.indexOf(ajout.charAt(i)) < 0 )
     return false;
     return true;
   }
   /*
   Indexof renvoit à la position du caractère de la chaine.
     charAt renvoit à l'index choisit.
   */
 }

 function calcul() {

   var a = 0;
   if (verification(document.calculatrice.result.value)){
     a = eval(document.calculatrice.result.value);
     /*Eval prend en compte la chaine de caractère*/
     document.calculatrice.result.value = a;
   }

 }

 function ajouter(caracteres) {

   /*permet la concaténation*/
   document.calculatrice.result.value =
   document.calculatrice.result.value + caracteres;
 }

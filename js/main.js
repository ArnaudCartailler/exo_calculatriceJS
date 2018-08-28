
// function verification(ajout) {
//
//   var all = "1234567890+-.*/";
//
//   for (var i = 0; i < ajout.length; i++){
//
//   if (all.indexOf(ajout.charAt(i)) < 0 )
//      return false;
//      return true;
//    }
//    /*
//    Indexof renvoit à la position du caractère de la chaine.
//    charAt au choix du caractère.
//    */
//  }
//
//  function calcul() {
//
//    var final = 0;
//      if (verification(document.calculatrice.result.value)){
//        final = eval(document.calculatrice.result.value);
//        /*Eval execute la fonction de ce qui est contenu dans la chaine*/
//        document.calculatrice.result.value = final;
//      }
//  }
//
//  function ajouter(caracteres) {
//    /*permet la concaténation des caractères*/
//    document.calculatrice.result.value =
//    document.calculatrice.result.value + caracteres;
//  }

var num1 ="";
var num2="";

var result="";

var dot=0;

var display = document.getElementById("display");

//reinitialization
function restart(){
  num1 = display.innerHTML = "" ;
  num2="";
  result="";
}

//function +/-
function inversion(){
  //need to be a number to work with -1 multiplication
  num1=Number(num1);
  num1 = display.innerHTML = num1*(-1);
  num1=num1.toString();
}

//display number
function add(n){
  num1 = display.innerHTML = num1 + n ;
}

//display dot
function dot(n){
  if (dot===0){
    num1 = display.innerHTML = num1 + n ;
    dot++;
  }
}

//main operator system
function ope(n){

  //saving first value
  if (num2===""){
    num2 = Number(num1);
    //reinitializing dot for each number
    dot=0;
  }

  //comparing previous operator to make the operation correctly
  else {
    calcul();
    //saving new value
    num2=num1;
    dot=0;
  }

  //reinitializing input value
  num1="";

  //saving operator for the next operation
  result= n ;
  return result;
}

//only "=" button
function result(){
  calcul();
  dot=0;
  num2="";
  result="";
}

function calcul(){
  num1=Number(num1);
  if (result==="+"){
    num1=display.innerHTML = num2 + num1;
  }
  else if (result==="-"){
    num1=display.innerHTML = num2 - num1 ;
  }
  else if (result==="x"){
    num1=display.innerHTML = num2 * num1 ;
  }
  else if (result==="/"){
    num1=display.innerHTML = num2/ num1 ;
  }
}

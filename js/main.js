
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

/*second exemple*/


var num1 ="";
var num2="";

var result="";

var dot=0;

var display = document.getElementById("display");
display.value = result;

function restart(){
  num1 = display.innerHTML = "" ;
  num2="";
  result="";
}

//function +/-
function inversion(){
  num1=Number(num1);
  num1 = display.innerHTML = num1*(-1);
  num1=num1.toString();
}

function add(number){
  num1 = display.value = num1 + number ;
}

function dot(number){
  if (dot===0){
    num1 = display.innerHTML = num1 + number ;
    dot++;
  }
}

function ope(number){

  if (num2===""){
    num2 = Number(num1);
    dot=0;
  }

  else {
    calcul();
    num2=num1;
    dot=0;
  }

  num1="";

  result= number ;
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
    num1=display.value = num2 + num1;
  }
  else if (result==="-"){
    num1=display.value = num2 - num1 ;
  }
  else if (result==="*"){
    num1=display.value = num2 * num1 ;
  }
  else if (result==="/"){
    num1=display.value = num2/ num1 ;
  }
}

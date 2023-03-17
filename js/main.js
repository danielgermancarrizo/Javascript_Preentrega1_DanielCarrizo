/* Simlador de compras, se poseen tres artículos y que se puede pagar con distintos medios de pago. 
Se puede adquirir la cantidad de artículos que se quiera siempre que usemos el S para seguir comprando.
Permite pagar el total con distintos medios de pago.
Además se loguea con un pass que es 1234.*/ 

let opcion = 1;
let pass = 1234;
let access = false;

const articles = {
  "zapatillas": 12500,
  "remera": 8500,
  "campera": 40500,
  "default": 0
}

for(let i = 3; i >= 0; i--){
  let loginPass = prompt(
    "Ingresa tu password, posees " + (i+1) + " oportunidades"
  );
  access=passValidate(loginPass,pass);
  
  if(access){
    buy()
    break;
  }  
}

if (access==false){
  alert("Superó la cantidad de intentos de ingreso.")
}


function passValidate(loginPass,pass){
  if(loginPass==pass){
    alert("bienvenido, ya podés comprar")
    access = true;
  }else{
    alert("Error de password, intente nuevamente.");
    access=false;
  }
  return access;
}


function buy(){
  let price = 0;
  let buy = true;
  
  while(buy == true){
    price = articleValidate();
    pay(price);
    buy=sellingValidate()
  }
  
  alert("Muchas gracias por su compra");
  
}

function sellingValidate(){
  let follow = true;
  let answer="";

  while(follow){
    answer=prompt("Desea seguir comprando? (S/N)");
    if(answer.toLowerCase() == "n"){
      return false;
    }else if (answer.toLowerCase() == "s" ){
      return true;
    }else{
      alert("Ingrese una opción válida, S o N.")
    }
  }
}

function articleValidate(){
  let article="";
  let validate = true;
  
  while(validate){
    article=prompt(
      "¿Qué vas a comprar hoy? ¿zapatillas, remera o campera?."
    );
    
    price = getPrice(article.toLowerCase());
    if(price == 0){
      alert(article+" no es un producto valido, ingrese nuevamente.")
    }else{
      validate=false;
    }
  }

  return price;
}

function getPrice(article){
  return articles[article] || articles["default"];
}

function pay(price){
  let balance = price;
  let payAmount = 0;

  while(balance>0){
    
    payFormValidate(balance);
    payAmount = prompt("Ingrese importe: ");
  
    if(payAmount>balance){
      alert("Ingresó mal el monto, es mayor al saldo a pagar")
    }else{
      balance = balance - payAmount;
    }    
  }
}


function payFormValidate(balance){
  let validate = true;
  let payForm=0;
  
  while(validate){ 
    
    payForm = prompt("Debe pagar: $" + balance + "- Las formas de pago son: 1. Débito / 2.tarjeta de crédito / 3.transferencia"); 
   
    if (payForm == 1 || payForm == 2 || payForm == 3){
      validate=false;
    }else{
      alert("No es una forma de pago válida, vuelva a intentar");
    }
  }
}



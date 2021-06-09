console.log("_______________________________________")
console.log("")
console.log("INSPEÇAO DE EXTINTORES")
console.log("_______________________________________")
console.log("")


var Login = prompt("Login:")
var Senha = prompt("Senha: ")


if(Login != "daniel" & Senha != "123"){
  console.log("")
  console.log("Login e Senha incorretos!")
  console.log("Por segurança, seu acesso foi bloqueado, solicite ajuda ao Departamento responsável.")}

  else if(Login != "daniel"){
  console.log("")
  console.log("Login incorreto!")
  console.log("Por segurança, seu acesso foi bloqueado, solicite ajuda ao Departamento responsável.")}

  else if(Senha != "123"){
  console.log("")
  console.log("Senha incorreta!")
  console.log("Por segurança, seu acesso foi bloqueado, solicite ajuda ao Departamento responsável.")}

  else if(Login == "daniel" & Senha == "123"){
  console.log("")
  console.log("Bem vindo à Inspeção de Extintores")
  }
console.log("_______________________________________")
console.log("")


var contador = 0;


if(Login == "daniel" & Senha == "123"){


do{
  var codbarra = prompt("Código de Barra: ")
  console.log("")

  var valido = true;

  switch(codbarra){
      case "111":
        console.log("Água Pressurizada - 10 Litros");
      break;
      case "222":
        console.log("Gás Carbônico - 6Kg");
      break;
      case "333":
        console.log("Pó Químico (BC) - 4 Kg");
      break;
      case "444":
        console.log("Pó Químico (ABC) - 4 Kg");
      break;
      default: 
        console.log("Opção inválida");
        valido = false;
      break;
    }
    if(valido == true)
      console.log("")
      prompt("Extintor C - Conforme/NC - Não Conforme?")
    contador++;
} while(contador <= 5);}
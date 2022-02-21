
function clicou (){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>" //<b> coloca o texto em negrito

//console.log(document.getElementById("agradecimento"));
    //alert ("obrigado por clicar");
}

function redirecionar (){

    window.open("https://web.dio.me/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d"); //redireciona para um site
}

function trocar (elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>"; 

    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>"
    //alert("trocar texto");

}

function voltar (elemento){ //para a função de passar o mouse funcione para todos os id que eu queira tenho que colocar a palava elemento
    elemento.innerHTML = "<b>Passe o mouse aqui</b>"; //para funcionar o passe do mouse tenho que usar assim 
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>" // afunção trocar só vai funcionar para um id se eu usar essa função.

}

function funcaoChage(elemento){

    console.log(elemento.value)

}




/*
var d = new Date ();
alert (d.getDate());
alert (d.getHours());
alert (d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++)(
    alert(count);
);
*/
/*
var count = 0;
while (Count <= 5) (
    console.log (count);
    alert (count);
    count++;
);
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert ("maior de idade");
}else{
    alert ("menor de idade");
};
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(frutas.nome);
alert(fruta.cor);

//var lista = ["maça", "perâ", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.tastring());
//console.log(lista.join (" - " ));
/*
var nome = "Amanda Soeiro"; //quando coloca entre "" o javascript reconhece que é uma string
var idade = 28;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2); //ele fez a soma pois não tinha "" então ele reconheceu como numero inteiro
//F12 abre a tela de inspersionar 
console.log(nome);
console.log(idade + idade2);
console.log (frase.toUpperCase()); //toUpperCase coloca tudo em maisculo e o tolowecase fica tudo minusculo
//alert(frase.replace("Japão", "Brasil")); posso usar tanto no console como no alert
*/


/* 
        Faça um script para efetuar o índice de massa corporal
*/

/*
        Uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores a R$ 500,00. Faça um programa que receba o salário de funcionário e mostre o vallor do salário reajustado ou uma mensagem 
        caso ele não tenha direito ao aumento.
        */


let peso = parseInt(prompt('Digite seu peso'));
let altura = parseFloat(prompt('Digite sua altura'));

let IMC = (peso / (altura * altura));

document.getElementById('Info').innerHTML = ` Seu índice de massa corporal é: ${IMC}`;

 
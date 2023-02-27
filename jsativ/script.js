/* faça um algoritmo que leia o nome, genero, idade e o tempo de contribuiçao na empresa de uma pessoa para calcular se a pessoa ela pode se aposentar*/

const name = prompt('Dgite seu nome');
const gender = prompt('Digite F para feminino e M para masculino');
const age = parseInt(prompt('Digite sua idade'))
const contribution = parseInt(prompt('Digite seu tempo de contribuição'))


const calculoAposentadoria = age + contribution;

const homemPodeAposentar = gender == 'M' && contribution >= 35 && calculoAposentadoria >= 95;
const mulherPodeAposentar = gender == 'F' && contribution >= 30 && calculoAposentadoria >= 85;

if(homemPodeAposentar || mulherPodeAposentar ) {
    document.getElementById('Info').innerHTML = `${name}, você pode se aposentar`;
}
else{
    document.getElementById('Info').innerHTML = `${name}, você não pode se aposentar`;
}


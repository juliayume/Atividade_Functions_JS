//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console

var tarefas = [prompt("Que tarefa você precisa realizar hoje?")]

while (true){
    let outraTarefa = prompt("Você deseja adicionar outra tarefa?", "S/N")

    if (outraTarefa.toLowerCase() === "s"){
        tarefas.push(prompt("Que tarefa você precisa realizar hoje?"))
    }
    else {
        break
    }
}

console.log(tarefas)

let numeroTarefas = tarefas.length

var tarefasRealizadas = tarefas

while (true) {
    let realizacaoTarefas = prompt("Você já realizou alguma tarefa hoje?", "S/N")

    if (realizacaoTarefas.toLowerCase() === "s"){
        let realizada = prompt("Qual tarefa você já realizou?")

        if (tarefasRealizadas.indexOf(realizada) > -1){
            tarefasRealizadas.splice(tarefasRealizadas.indexOf(realizada), 1)
        }
        else {
            alert("A tarefa inserida não foi encontrada")
        }
    }
    else {
        break
    }
}
console.log(tarefasRealizadas)

var numeroRealizadas = tarefasRealizadas.length

alert("Você tinha "+numeroTarefas+" tarefas para fazer.\nVocê realizou "+numeroRealizadas+" tarefas.")


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

function personalInformation({name, age, address, job}) {
    
    console.log(`Eu sou ${name}, tenho ${age}, moro na ${address} e sou ${job}.`)
}

let info = {
    name: "Julia", 
    age: 17, 
    address: "rua Imaginária, 123", 
    job:"estudante"
};

personalInformation(info)

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function sum({num1, num2}) {
    return `A soma das idades é ${num1 + num2}`
}

let ages = {
    num1: parseInt(prompt("Qual a idade da primeira pessoa?")),
    num2: parseInt(prompt("Qual a idade da segunda pessoa?"))
};

console.log(sum(ages))
alert(sum(ages))

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function sum({num1, num2}) {
    let greater = []
    let positionGreater = []

    let lesser = []
    let positionLesser = []

    if (num1 > num2) {
        greater.push(num1)
        positionGreater.push("primeiro")

        lesser.push(num2)
        positionLesser.push("segundo")
    }
    else {
        greater.push(num2)
        positionGreater.push("segundo")

        lesser.push(num1)
        positionLesser.push("primeiro")        
    }

    return `O ${positionGreater} valor, que é ${greater}, é maior que o ${positionLesser} valor, que é ${lesser}!`
}

let values = {
    num1: parseInt(prompt("Informe um valor:")),
    num2: parseInt(prompt("Informe outro valor:"))
};

console.log(sum(values))
alert(sum(values))

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function even(number) {
    let even = true

    if (number % 2 === 0) {
        even = even
    }
    else{
        even = !even
    }

    return `O número é par? ${even}`
}

let number = parseInt(prompt("Informe um valor para descobrirmos se ele é par:"))

alert(even(number))
console.log(even(number))

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function sizeUpperCased(message) {
    return `Sua mensagem '${message.toUpperCase()}' possui ${message.length} caracteres.`
}

let message = prompt("Insira uma mensagem:")

alert(sizeUpperCased(message))
console.log(sizeUpperCased(message))

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.

function sum({num1, num2}) {
    return num1 + num2
}

function sub({num1, num2}) {
    return num1 - num2
}

function multiply({num1, num2}) {
    return num1 * num2
}

function divide({num1, num2}) {
    return (num1 / num2).toFixed(2)
}

var values = {
    num1: parseInt(prompt("Informe um valor:")),
    num2: parseInt(prompt("Informe outro valor:"))
}

alert(`Resultado das operações:\n\nSoma: ${sum(values)}\nSubtração: ${sub(values)}\nMultiplicação: ${multiply(values)}\nDivisão: ${divide(values)}`)
console.log(`Resultado das operações:\nSoma: ${sum(values)}\nSubtração: ${sub(values)}\nMultiplicação: ${multiply(values)}\nDivisão: ${divide(values)}`)
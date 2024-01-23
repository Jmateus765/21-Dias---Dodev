let nome =""
let idade = 0
let altura = 0
let peso = 0


nome = prompt("Qual seu nome?")
idade = parseInt(prompt("Qual sua idade?"))
altura = parseFloat(prompt("Qual sua altura?"))
peso = parseInt(prompt("Qual seu peso?"))
let anoNasc = 0
anoNasc = 2023 - idade
let imc = 0
imc = peso / (altura * altura)
console.log("Olá," + nome + " voce tem " + idade + "anos, nasceu em" + anoNasc + ", tem" + altura + "de altura, pesa" + peso + "kg e seu IMC é:" + imc + "kg/m2")
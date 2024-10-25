// criar variaveis e mudar valores usando outras variaveis //

// let profissao1 = "Cozinheiro"
// let time1 = "Flamengo"
// let idade1 = 18

// let profissao2 = profissao1
// alert(profissao2)

// let time2 = time1
// alert(time2)

// let idade2 = idade1
// alert(idade2)


// tipos de dados //

let estaSolteiro = true
let salario = 8000.00
let nome = "Yasmin"

const dados = "Solteiro: " + estaSolteiro + " Salário: " + salario + " Nome: " + nome
const dados2 = `Solteiro: ${estaSolteiro} Salário: ${salario} Nome: ${nome}`


// encontrando elementos no HTML //
const paragrafo = document.getElementById("dados")
paragrafo.innerHTML = dados2



// FUNÇÕES NOMEADAS //
function logar(usuario, senha) {
    alert('Logado com a função nomeada!')
    alert('Olá, ' + usuario + ". Sua senha é " + senha)
}
logar("yas", 1234)


//FUNÇÕES ANÔNIMAS//
const conectar = function(usuario, senha) {
    alert('Logado com a função anonima!')
    alert('Olá, ' + usuario)
}
conectar('Joison', '16tgh')


// ARROW FUNCTIONS OU FUNÇÕES FLECHA //
const colorir = () => {
    alert('Função flecha em ação')
}
colorir()
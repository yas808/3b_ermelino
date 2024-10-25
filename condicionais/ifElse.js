// const idade = 17;

// if (idade >= 55){
//   console.log("Idosos não podem entrar");
// }

// else if (idade < 55) {
//   if (idade >= 18) {
//     console.log("Pode entrar");
//   }
//   else if (idade < 18){
//     console.log("Menor de idade não pode entrar");
//   }
// }


// Testar pessoas menos de 18//
const convidados = ['João', 'Maria', 'Pedro']
const friend = 'João'

if (convidados.includes(friend)) {
  console.log('Olá, ' + friend + '! Pode entrar!');
} else {
  console.log('Não conheço essa tal ' + friend + '!')
}
const trabalho1 = true
const trabalho2 = false

const comprarTv50 = trabalho1 && trabalho2 // AND
const comprarTv40 = trabalho1 != trabalho2  // XOR
const tomarSorvete = trabalho1 || trabalho2 // OR
const ficarEmCasa = !tomarSorvete

console.log('Vamos comprar a TV de 50"?', comprarTv50 ? 'Sim' : 'Não')
console.log('Vamos comprar a TV de 40"?', comprarTv40 ? 'Sim' : 'Não')
console.log('Vamos tomar sorvete?', tomarSorvete ? 'Sim' : 'Não')
console.log('Vamos ficar em casa?', ficarEmCasa ? 'Sim' : 'Não')

// const ficarEmCasa = !trabalho1 && !trabalho2 
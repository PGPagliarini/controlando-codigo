const emBlackFriday = false
const temEstoque = true
const temPerfilFuncionario = true

const permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario

console.log('Permitir desconto máximo?', permiteDescontoMaximo)
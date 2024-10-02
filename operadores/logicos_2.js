const produtoFragil = true
const produtoAltoCusto = false

console.log(produtoFragil && produtoAltoCusto)
console.log(produtoFragil || produtoAltoCusto)
console.log(produtoFragil != produtoAltoCusto)
console.log(!produtoFragil)

// em javascript 0 significa false
// em javascript != 0 significa true

// truque!!
console.log(!!0)
console.log(!!0.0000001)
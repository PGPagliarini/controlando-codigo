const nota = 2.8
let conceito = '?'

if (nota >= 9 && nota <= 10) {
    conceito = 'A'
}

if (nota >= 7 && nota <= 8.9) {
    conceito = 'B'
}

if (nota >= 5 && nota <= 6.9) {
    conceito = 'C'
}

if (nota >= 4.5 && nota <= 4.9) {
    conceito = 'D'
}

if (nota <= 4.5) {
    conceito = 'F'
}

console.log('O conceito do aluno é:', conceito)
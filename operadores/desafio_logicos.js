const totalAulas = 223
const faltas = 18

const frequencia = Math.round((1 - faltas / totalAulas) * 100)
const temFrequenciaSuficiente = frequencia >= 80

const nota1 = 5.8
const nota2 = 8.1
const nota3 = 6.9

const mediaNotas = (nota1 + nota2 + nota3) / 3
const temMediaSuficiente = Math.round(mediaNotas) >= 7

console.log("A frequência do aluno foi de: ", frequencia + '%')
console.log("Média: " + mediaNotas)

const aprovado = temFrequenciaSuficiente && temMediaSuficiente
console.log("O aluno foi aprovado?", aprovado)

// break (para de ler com relação ao for e vai para o próximo comando)
for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        break
    }
    console.log(i)
}


// continue (para de ler somente no valor especificado e continua lendo a mesma sentença de código)
for (let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue
    }
    console.log(i)
}

console.log('Fim')
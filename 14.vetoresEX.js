// Exerciocio.

// crie um vetor com nome de seus familiares.
// com seis nomes.

// User todos os comandos vistos em vetores apos criar a lista.

const listadefamiliares = ["mirele","flavio","lene","antony","gerson","barreto"]

console.log("Exibindo todos os nome da lista :")
console.log(listadefamiliares)

console.log("\n Exibindo apenas o primeiro nomeda lista")
console.log(listadefamiliares[0])

console.log("\nAdicinando mais um nome ")
listadefamiliares.push("nunes")
console.log(listadefamiliares)

console.log("\n Removendo um nome da lista")
listadefamiliares.splice(2,1)
console.log(listadefamiliares)

console.log("\n Removendo apenas o ultimo nome da lista")
listadefamiliares.pop()
console.log(listadefamiliares)

console.log("\nRemovendo apenas o primeiro nome da lista")
listadefamiliares.shift()
console.log(listadefamiliares)



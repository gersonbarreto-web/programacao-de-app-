// vetores

const listadenomes = ["marta" , "jose" , "maria"]

console.log ("Exibindo todos os elementos: ")
console.log(listadenomes)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log(listadenomes[0])

console.log("\nAdicionando um elementos: ")
listadenomes.push("marilia")
console.log(listadenomes)

console.log("\nAdicinando mais um nome")
listadenomes.push("pele")
console.log(listadenomes)

console.log("\nRemovendo um elemento: ")
listadenomes.splice(2,1)
console.log(listadenomes)


listadenomes.splice(1,1)
console.log(listadenomes)

console.log("\nRemovendo apenas o ultimo nome da lista")
listadenomes.pop()
console.log(listadenomes)

console.log("\nRemovendo apenas o primeiro nome da lista")
listadenomes.shift()
console.log(listadenomes)
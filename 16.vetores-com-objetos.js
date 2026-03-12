// vetor de nomes 
const listadenomes = ["ana","maria","joana"]


// exemplo com vetor de numeros
const listadenumeros = [1,2,3,4,5]

// vetor de objetos com dados de nome e idade 
// um objeto carrega dados como uma classe





const listadeusuario = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "joana", idade: 45},
    {nome: "jose", idade : 30},
    {nome: "max", idade : 17},
    {nome: "pele", idade : 16}

]


// percorrendo e exibindo os elementos do vetor.
// forEach e uma funcao com laco de repeticao
console.log("Exibindo todos os usuarios do vetor")
// use as {} caso precise de mais de uma linha.
// Neste caso nao precisa, mas vamos usar.
listadeusuario.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos `)
    
})

//  como os antigos.
 console.log("\nExibindo todos os usuarios do vetor. ")
 for (let i = 0; i < listadeusuario.length; i++){
     console.log(`${listadeusuario[i].nome} tem ${listadeusuario[i].idade} anos .`)
}

console.log("\nFiltrando maiores  de 18 anos. ")
const maioridade = listadeusuario.filter(usuario => usuario.idade >= 18)
// use as {} caso precise de mais uma linha .
// neste caso nao precisa por isso nao vamos usar.
maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos. `)
)

console.log("\nFiltrando  menores de 18 anos. ")
const menoridade = listadeusuario.filter(usuario => usuario.idade <= 18)
menoridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nNa lista de numeros, filtre e mostre apenas numeros pares")
const pares = listadenumeros.filter((n) => {
    return n % 2=== 0 ;

});

console.log(pares);

console.log ("\nNa lista de nomes motre todos os nomes com forEach")
listadeusuario.forEach((nome) => {
    console.log(nome);

});

console.log("\nNa lista de usuario, mostre apenas os nomes.")
const nomes = listadeusuario.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuarios, encontre um usuario")
const usuarioEncontrado = listadeusuario.find(u => u.nome = "ana")
console.log(usuarioEncontrado)
console.log(`nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuario, encontre um usuario com idade de 45 anos.")
const usuarionotificado = listadeusuario.find(u => u.nome == "joana")
console.log(usuarionotificado)
console.log(`nome: ${usuarionotificado.nome} \nIdade: ${usuarionotificado.idade}`)

console.log("\nNa lista de usuario, somando todas a idade. ")
const somaidade = listadeusuario.reduce((total, usuario)=> total + usuario.idade, 0)
console.log(somaidade)




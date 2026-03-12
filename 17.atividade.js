const listaDeAlunos =[
    {nome : "Ana", nota: 5.0},
    {nome : "Bruno", nota: 10.0},
    {nome : "Carla", nota: 2.0},
    {nome : "Andrea", nota: 7.0},
    {nome : "Marta", nota: 6.0}
]

console.log("\nEncontre a aluna Marta e mostra o nome e a media dela.")
const alunaencontrada = listaDeAlunos.find(u => u.nome = "marta")
console.log(alunaencontrada)
console.log(`nome: ${alunaencontrada.nome} \nnota: ${alunaencontrada.nota}`)



console.log("\nMostre a media geral da turma ")
const somandomedia = listaDeAlunos.reduce((total, aluno)=> total + aluno.nota,0)
console.log(somandomedia)

console.log("\nMostre o nome e a nota dos alunos com nota abaixo de 7.0.")
const menornota = listaDeAlunos.filter(aluno => aluno.nota <=7)
menornota.forEach(aluno =>
    console.log(`${aluno.nome} tem ${aluno.nota} nota. `)
)



console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0")
const maiornota = listaDeAlunos.filter(aluno => aluno.nota >= 7)
maiornota.forEach(aluno =>
    console.log(`${aluno.nome} tem ${aluno.nota} nota. `)
)

import './style.css'

function infoAluno() {
    const name = "jao silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistema"

    return(
        <div className = "info-aluno">
            <h2>Infomarcoes do aluno : </h2>
            <p>Name: { name }</p>
            <p>idade: { idade }</p>
            <p>curso: { curso }</p>
        </div>
    )
}
    

export default infoAluno
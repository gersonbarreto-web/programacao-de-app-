import { useState } from 'react'
import './style.css'

function infoCurso() {
    const [nome , setNome] = useState("programacao de aplicativo")
    const [ cargaHoraria, setCargaHoraria] = useState (90)
    const [local,setlocal] = useState("SENAI")

    return (
        <div className= "info-curso">
            <h2>Dados do curso:</h2>
            <p>Name: { nome }</p>
            <p> Carga horaria: { cargaHoraria }</p>
            <p>local: { local }</p>
        </div>
    )
}

export default infoCurso
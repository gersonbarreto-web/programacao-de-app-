import { useState } from 'react';
import Mensagem from './components/Mensagem'
import infoCurso from './components/infoCurso'
import infoAluno from './components/infoAluno'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Bem vindo ou meu projeto.</h1>

     <Mensagem />
     <infoAluno/>
     <hr />
     <infoCurso/>
    </>
  )
}

export default App

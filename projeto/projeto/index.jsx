import { useState } from 'react';

function ListaJogadoresVitoria() {
  // 1. Iniciamos o estado com alguns jogadores do elenco
  const [jogadores, setJogadores] = useState([
    { id: 1, nome: 'Lucas Arcanjo' },
    { id: 2, nome: 'Wagner Leonardo' },
    { id: 3, nome: 'Osvaldo' }
  ]);

  // Estado para controlar o que o usuário digita no input
  const [novoJogador, setNovoJogador] = useState('');

  // 2. Função para adicionar um novo jogador
  const adicionarJogador = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    if (novoJogador.trim() === '') return; // Evita nomes vazios

    const novoItem = {
      id: Date.now(), // Gera um ID único simples
      nome: novoJogador
    };

    // Atualizamos a lista mantendo os antigos e adicionando o novo
    setJogadores([...jogadores, novoItem]);
    setNovoJogador(''); // Limpa o campo após adicionar
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🔴⚫ Jogadores do Vitória</h2>

      {/* Formulário para adicionar */}
      <form onSubmit={adicionarJogador} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nome do jogador"
          value={novoJogador}
          onChange={(e) => setNovoJogador(e.value)} // Atualiza o estado enquanto digita
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Adicionar
        </button>
      </form>

      {/* Renderização da lista */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {jogadores.map((jogador) => (
          <li 
            key={jogador.id} 
            style={{ 
              padding: '10px', 
              borderBottom: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              marginBottom: '5px'
            }}
          >
            {jogador.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaJogadoresVitoria;
function calcularValor() {
    // 1. Pegar o valor que o usuário digitou no campo de input
    let input = document.getElementById('quantidade').value;
    let quantidade = parseInt(input);
    
    // Pegar o elemento onde vamos mostrar o resultado
    let areaResultado = document.getElementById('resultado');

    // 2. Validação simples para evitar campos vazios ou números negativos
    if (isNaN(quantidade) || quantidade <= 0) {
        areaResultado.innerHTML = "Por favor, digite uma quantidade válida!";
        areaResultado.style.color = "red";
        return; // Para a execução da função aqui
    }

    // 3. Lógica do preço (A regra pedida no exercício)
    let precoUnidade;
    let valorTotal;

    if (quantidade < 12) {
        precoUnidade = 1.30;
    } else {
        precoUnidade = 1.00;
    }

    // 4. Calcular o total
    valorTotal = quantidade * precoUnidade;

    // 5. Formatar o número para o padrão de moeda do Brasil (R$ 0,00)
    let valorFormatado = valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // 6. Mostrar o resultado na tela
    areaResultado.innerHTML = `Total da compra: ${valorFormatado}`;
    areaResultado.style.color = "#2e8b57"; // Cor verde para sucesso
}
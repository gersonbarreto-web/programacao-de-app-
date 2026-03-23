function calcular() {
    // 1. Usamos parseFloat para aceitar notas como 7.5
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;

    let soma = nota1 + nota2 + nota3;
    let media = soma / 3; // 2. Dividimos por 3 para obter a média
    
    let telaResultado = document.getElementById("resultado");

    // 3. Usamos Template Strings (as crases ` `) para formatar a mensagem
    if (media >= 7) {
        telaResultado.innerText = `Soma: ${soma} | Média: ${media.toFixed(1)} - Aprovado! 🥳`;
        telaResultado.style.color = "green";
    } else if (media >= 5) { // Se estiver entre 5 e 6.9
        telaResultado.innerText = `Soma: ${soma} | Média: ${media.toFixed(1)} - Recuperação! 😢`;
        telaResultado.style.color = "orange";
    } else {
        telaResultado.innerText = `Soma: ${soma} | Média: ${media.toFixed(1)} - Reprovado! 😞`;
        telaResultado.style.color = "red";
    }
}
function calcular() {
    // Pegando os valores, forçando a ser número (parseFloat) 
    // e o "|| 0" garante que se a caixa estiver vazia, a nota será 0.
    let n1 = parseFloat(document.getElementById("media1").value) || 0;
    let n2 = parseFloat(document.getElementById("media2").value) || 0;
    let n3 = parseFloat(document.getElementById("media3").value) || 0;

    // Fazendo a matemática real
    let soma = n1 + n2 + n3;
    let media = soma 

    // Buscando o local de mostrar o resultado
    let telaResultado = document.getElementById("resultado");

    // Condição para aprovar ou reprovar
    if (media >= 7) {
        telaResultado.innerText = "A soma é " + soma + " e a média " + media.toFixed(1) + " -> Aprovado! 🎉";
        telaResultado.style.color = "green";
    } else {
        telaResultado.innerText = "A soma é " + soma + " e a média " + media.toFixed(1) + " -> Reprovado. 📚";
        telaResultado.style.color = "red";
    }
}
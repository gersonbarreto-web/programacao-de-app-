document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let codigo = document.getElementById("codigo").value;
    let ano = parseInt(document.getElementById("ano").value);
    let tempo = parseInt(document.getElementById("tempo").value);

    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;

    let mensagem;

    if (idade >= 65 || tempo >= 30) {
        mensagem = "Requerer aposentadoria";
    } else {
        mensagem = "Não requerer aposentadoria";
    }

    document.getElementById("resultado").innerHTML = `
        <strong>Código:</strong> ${codigo} <br>
        <strong>Idade:</strong> ${idade} anos <br>
        <strong>Tempo de trabalho:</strong> ${tempo} anos <br>
        <strong>Status:</strong> ${mensagem}
    `;
});
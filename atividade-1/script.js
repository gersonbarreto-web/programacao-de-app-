function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Elemento do html onde o resultado sera exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML= "";

    // verificar se a entrada e um nnumero valido.
    if (isNaN(numero) || numero === null || numero ==="") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um numero valido.</p>"
        return; // este comando sai da funcao 
    }


    // Adicionar titulo para a tabuada.
    resultadoDiv.innerHTML += `<h2>Tabuada do numero ${numero}</h2>`;

    //laco de repeticao para gerar tabuada.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }

}

const botaGerar = document.getElementById("btnGerar");
botaGerar.addEventListener("click", gerarTabuada);
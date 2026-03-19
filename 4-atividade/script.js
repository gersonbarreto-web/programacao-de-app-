function votacao(){
    let  idade = parseInt(document.getElementById("idade").value) || 0;

    let telaResultado = document.getElementById("resultado");

if (idade < 16) {
        
        telaResultado.innerText = "Com " + idade + " anos, você NÃO PODE votar.";
        telaResultado.style.color = "red";  
        
} else if (idade >= 16 && idade < 18) {
    telaResultado.innerText = "Com " + idade +   "  anos, seu voto e OPCIONAL. ";
    telaResultado.style.color = "orange";

} else if (idade >= 18 && idade <= 65 ) {
    telaResultado.innerText = "Com " + idade +  "  anos, voce e OBRIGADO A VOTA .";
    telaResultado.style.color = "green"; 

}  else if (idade > 65) {
    telaResultado.innerText = "Com " + idade +  "  anos, voce nao e OBRIGADO A VOTA .";
    telaResultado.style.color = "blue";
} 

}

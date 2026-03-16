function calcular(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);

let soma = n1 + n2;
let media = (n1 + n2) / 2;
let produto = n1 * n2;
let maior = Math.max(n1,n2);
let menor = Math.min(n1,n2);

document.getElementById("soma").innerText = "Soma: " + soma;
document.getElementById("media").innerText = "Média: " + media;
document.getElementById("produto").innerText = "Produto: " + produto;
document.getElementById("maior").innerText = "Maior número: " + maior;
document.getElementById("menor").innerText = "Menor número: " + menor;

}
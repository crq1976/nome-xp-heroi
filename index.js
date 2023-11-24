// Definindo o nome e a quantidade de experiência (XP) do herói
var nomeDoHeroi = "Homem de Ferro";
var xpDoHeroi = 15000;

// Estrutura de decisão para determinar o nível com base na quantidade de XP
var nivel;

if (xpDoHeroi < 1000) {nivel = "Ferro";
} 
else if (xpDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivel = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivel = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);

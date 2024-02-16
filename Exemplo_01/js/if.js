function calcularValorCarro(valorBase, anoAtual) {
    // Condições para validar o ano atual
    if (isNaN(valorBase) || isNaN(anoAtual) || anoAtual < 0) {
        return 'Por favor, forneça um valor base válido e um ano atual maior ou igual a zero.';
    }

    // Inicializa o valor do carro
    var valorCarro = valorBase;

    // Aplica aumentos com base no ano atual
    if (anoAtual >= 2022) {
        valorCarro += valorCarro * 0.05; // Aumento de 5% para carros a partir de 2022
    }

    if (anoAtual >= 2025) {
        valorCarro += valorCarro * 0.03; // Aumento adicional de 3% para carros a partir de 2025
    }

    // Retorna o valor atualizado do carro
    return 'O valor do carro em ' + anoAtual + ' é: R$ ' + valorCarro.toFixed(2);
}

// Exemplo de uso:
var valorBaseCarro = 30000; // Substitua pelo valor base do carro desejado
var anoAtual = new Date().getFullYear(); // Obtém o ano atual

var resultado = calcularValorCarro(valorBaseCarro, anoAtual);
console.log(resultado);

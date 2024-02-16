function calcularIMC(peso, altura) {
    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return 'Por favor, insira valores válidos para peso e altura.';
    }

    // Calculando o IMC
    var imc = peso / (altura * altura);

    // Retornando o resultado formatado
    return 'Seu IMC é: ' + imc.toFixed(2);
}

// Exemplo de uso:
var pesoExemplo = 70; // Substitua pelo peso desejado
var alturaExemplo = 1.75; // Substitua pela altura desejada

var resultado = calcularIMC(pesoExemplo, alturaExemplo);
console.log(resultado);
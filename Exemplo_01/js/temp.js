function converterTemperatura(temperaturaCelsius, escalaDestino) {
    if (isNaN(temperaturaCelsius)) {
        return 'Por favor, insira um valor numérico para a temperatura em graus Celsius.';
    }

    switch (escalaDestino.toLowerCase()) {
        case 'fahrenheit':
            var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
            return 'A temperatura em Fahrenheit é: ' + temperaturaFahrenheit.toFixed(2) + ' °F';

        case 'kelvin':
            var temperaturaKelvin = temperaturaCelsius + 273.15;
            return 'A temperatura em Kelvin é: ' + temperaturaKelvin.toFixed(2) + ' K';

        case 'personalizada':
            // Substitua esta fórmula pela sua escala personalizada
            var temperaturaPersonalizada = temperaturaCelsius * 3.5; 
            return 'A temperatura na escala personalizada é: ' + temperaturaPersonalizada.toFixed(2);

        default:
            return 'Por favor, escolha uma escala válida: Fahrenheit, Kelvin ou Personalizada.';
    }
}

function executarConversao() {
    var temperaturaCelsius = parseFloat(document.getElementById('tempCelsius').value);
    var escalaDestino = document.getElementById('escalaDestino').value;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    var resultado = converterTemperatura(temperaturaCelsius, escalaDestino);
    resultadoElement.innerHTML = resultado;

    // Adiciona uma imagem após 3 segundos
    setTimeout(function () {
        var imagem = document.createElement('img');
        imagem.src = 'Imagem/imagem.jpg'; // Substitua pelo caminho da sua imagem
        imagem.alt = 'Imagem';
        resultadoElement.appendChild(imagem);
    }, 3000); // 3000 milissegundos = 3 segundos
}
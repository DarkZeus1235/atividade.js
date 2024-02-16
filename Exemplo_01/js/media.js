document.addEventListener("DOMContentLoaded"), function() {
    // Função para calcular o valor do carro ao longo do tempo
    function calcularValoresCarro(valorBase, anos) {
        var informacoesVeiculo = document.getElementById('informacoesVeiculo');
        var tabelaValores = document.getElementById('tabelaValores');

        // Limpa as informações do veículo e a tabela antes de adicionar novos elementos
        informacoesVeiculo.innerHTML = '';
        tabelaValores.innerHTML = '';

        // Condições para validar o valor base e os anos
        if (isNaN(valorBase) || isNaN(anos) || anos <= 0) {
            alert('Por favor, forneça um valor base válido e um número de anos maior que zero.');
            return;
        }

        // Adiciona informações do veículo
        var informacoesHTML = '<p><strong>Nome do Veículo:</strong> Seu Veículo</p>';
        informacoesHTML += '<p><strong>Valor Base do Carro:</strong> R$ ' + valorBase.toFixed(2) + '</p>';
        informacoesHTML += '<p><strong>Número de Anos:</strong> ' + anos + '</p>';
        informacoesVeiculo.innerHTML = informacoesHTML;

        // Inicializa o valor do carro
        var valorCarro = valorBase;

        // Adiciona linhas à tabela para cada ano
        for (var i = 1; i <= anos; i++) {
            // Aplica aumentos com base no ano
            if (i >= 1 && i < 5) {
                valorCarro += valorCarro * 0.1; // Aumento de 10% para os primeiros 4 anos
            } else if (i >= 5 && i < 10) {
                valorCarro += valorCarro * 0.05; // Aumento de 5% dos anos 5 ao 9
            } else {
                valorCarro += valorCarro * 0.02; // Aumento de 2% a partir do 10º ano
            }

            // Adiciona uma nova linha à tabela
            var novaLinha = tabelaValores.insertRow();
            var colunaAno = novaLinha.insertCell(0);
            var colunaValor = novaLinha.insertCell(1);

            colunaAno.textContent = i;
            colunaValor.textContent = 'R$ ' + valorCarro.toFixed(2);
        }
    }
}

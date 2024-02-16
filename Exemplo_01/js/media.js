document.addEventListener("DOMContentLoaded", function() {
    // Array para armazenar as notas dos alunos
    var notasAlunos = [];

    // Função para calcular a média de notas
    function calcularMedia(notas) {
        var totalNotas = notas.reduce(function(acumulador, nota) {
            return acumulador + nota;
        }, 0);

        var media = totalNotas / notas.length;
        return media;
    }

    // Função para adicionar uma nota à tabela e ao array
    function adicionarNota() {
        var notaAlunoInput = document.getElementById('notaAluno');
        var nota = parseFloat(notaAlunoInput.value);

        // Validação da nota
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert('Por favor, forneça uma nota válida entre 0 e 10.');
            return;
        }

        // Adiciona a nota à tabela
        adicionarLinhaTabela(tabelaNotas, 'Aluno ' + (notasAlunos.length + 1), nota);

        // Adiciona a nota ao array
        notasAlunos.push(nota);

        // Atualiza a média
        atualizarMedia();
    }

    // Função para atualizar a média e exibir no HTML
    function atualizarMedia() {
        var mediaFinal = calcularMedia(notasAlunos);
        var resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = 'A média dos alunos é: ' + mediaFinal.toFixed(2);
    }

    // Função para adicionar uma linha na tabela
    function adicionarLinhaTabela(tabela, aluno, nota) {
        var novaLinha = tabela.insertRow();
        var colunaAluno = novaLinha.insertCell(0);
        var colunaNota = novaLinha.insertCell(1);

        colunaAluno.textContent = aluno;
        colunaNota.textContent = nota;
    }

    // Expondo a função adicionarNota para ser chamada no HTML
    window.adicionarNota = adicionarNota;
});

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

let tamanhoFonte = 100;

function fecharTela() {

    document.getElementById("telaInicial")
        .style.display = "none";
}

function irPara(secao) {

    fecharTela();

    setTimeout(() => {

        document.getElementById(secao)
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 200);
}

function alternarModoEscuro() {

    document.body.classList.toggle("dark-mode");
}

function aumentarFonte() {

    if (tamanhoFonte < 140) {

        tamanhoFonte += 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";
    }
}

function diminuirFonte() {

    if (tamanhoFonte > 80) {

        tamanhoFonte -= 10;

        document.body.style.fontSize =
            tamanhoFonte + "%";
    }
}

console.log("Site carregado com sucesso!");

document.addEventListener("DOMContentLoaded", function () {

    const mesAtual = new Date().getMonth();

    const cards = document.querySelectorAll(".fpmc-safra-item");

    cards.forEach(card => {
        if (parseInt(card.dataset.mes) === mesAtual) {
            card.classList.add("destaque");
        }
    });

});


<!-- GRÁFICOS (Chart.js) -->
<script>
new Chart(document.getElementById('graficoExperiencia'), {
    type: 'bar',
    data: {
        labels: ['Produtor 1', 'Produtor 2', 'Produtor 3'],
        datasets: [{
            label: 'Anos de Experiência',
            data: [7, 10, 5]
        }]
    }
});

new Chart(document.getElementById('graficoSobras'), {
    type: 'pie',
    data: {
        labels: [
            'Alimentação Animal',
            'Compostagem',
            'Consumo Familiar',
            'Doação'
        ],
        datasets: [{
            data: [2, 2, 1, 1]
        }]
    }
});
</script>
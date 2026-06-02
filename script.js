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

(function () {

    const container = document.getElementById("fpmc-safra-atual");

    if (!container) return;

    const safras = {
        0: "Abacaxi, Manga, Melancia, Uva, Figo e Tomate",
        1: "Abacate, Ameixa, Goiaba, Pêssego e Pera",
        2: "Abacate, Banana, Goiaba, Limão e Mamão",
        3: "Abacate, Caqui, Maçã, Pera e Limão",
        4: "Caqui, Maçã, Laranja, Tangerina e Maracujá",
        5: "Laranja, Mexerica, Morango, Couve e Brócolis",
        6: "Morango, Laranja, Tangerina e Couve-flor",
        7: "Morango, Laranja, Tangerina e Alface",
        8: "Morango, Amora, Pêssego e Ervilha",
        9: "Acerola, Amora, Pêssego e Jabuticaba",
        10: "Acerola, Manga, Melancia e Milho-verde",
        11: "Manga, Melancia, Uva, Lichia e Figo"
    };

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const mesAtual = new Date().getMonth();

    container.innerHTML = `
        <div class="fpmc-safra-destaque">
            <h3>🌾 Produtos da Safra em ${meses[mesAtual]}</h3>
            <p>${safras[mesAtual]}</p>
        </div>
    `;

})();
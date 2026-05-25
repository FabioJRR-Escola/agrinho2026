/* =========================================
BANNER
========================================= */

const bannerInfo =
    JSON.parse(localStorage.getItem('bannerInfo'));

if(bannerInfo) {

    const bannerImage =
        document.getElementById('banner-image');

    const bannerLogo =
        document.getElementById('banner-logo');

    if(bannerImage && bannerInfo.imagem) {

        bannerImage.src = bannerInfo.imagem;
    }

    if(bannerLogo && bannerInfo.logo) {

        bannerLogo.src = bannerInfo.logo;
    }

    const titulo =
        document.getElementById('banner-title');

    const subtitulo =
        document.getElementById('banner-subtitle');

    if(titulo && bannerInfo.titulo) {

        titulo.innerText = bannerInfo.titulo;
    }

    if(subtitulo && bannerInfo.subtitulo) {

        subtitulo.innerText = bannerInfo.subtitulo;
    }
}

/* =========================================
FEIRA
========================================= */

const feiraInfo =
    JSON.parse(localStorage.getItem('feiraInfo'));

const feiraCard =
    document.getElementById('feira-info-card');

if(feiraInfo && feiraCard) {

    feiraCard.innerHTML = `

        <p>📍 ${feiraInfo.local}</p>

        <br>

        <p>📅 ${feiraInfo.data}</p>

        <br>

        <p>🕘 ${feiraInfo.horario}</p>
    `;
}

/* =========================================
AVISOS
========================================= */

const avisosHome =
    document.getElementById('avisos-home');

const avisos =
    JSON.parse(localStorage.getItem('avisos')) || [];

if(avisosHome) {

    avisos.forEach(aviso => {

        avisosHome.innerHTML += `

            <div class="aviso-card">

                <p>${aviso}</p>

            </div>
        `;
    });
}

/* =========================================
PRODUTORES
========================================= */

const produtores =
    JSON.parse(localStorage.getItem('produtores')) || [];

const listaProdutores =
    document.getElementById('lista-produtores');

const listaProdutos =
    document.getElementById('lista-produtos');

if(listaProdutores) {

    produtores.forEach(produtor => {

        listaProdutores.innerHTML += `

            <div class="card">

                <img src="${produtor.imagem}">

                <h3>${produtor.nome}</h3>

                <p>${produtor.historia}</p>

            </div>
        `;
    });
}

if(listaProdutos) {

    produtores.forEach(produtor => {

        listaProdutos.innerHTML += `

            <div class="card">

                <img src="${produtor.imagem}">

                <h3>${produtor.produto}</h3>

                <p>Produzido por ${produtor.nome}</p>

            </div>
        `;
    });
}

/* =========================================
RECEITAS
========================================= */

const receitas =
    JSON.parse(localStorage.getItem('receitas')) || [];

const listaReceitas =
    document.getElementById('lista-receitas-home');

if(listaReceitas) {

    receitas.forEach(receita => {

        listaReceitas.innerHTML += `

            <div class="card">

                <img src="${receita.imagem}">

                <h3>${receita.nome}</h3>

                <p>${receita.descricao}</p>

            </div>
        `;
    });
}
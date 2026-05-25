/* =========================================
MOSTRAR SEÇÕES
========================================= */

function mostrarSecao(id) {

    const secoes =
        document.querySelectorAll('.admin-section');

    secoes.forEach(secao => {

        secao.style.display = 'none';
    });

    document.getElementById(id)
        .style.display = 'block';
}

/* =========================================
BANNER
========================================= */

const formBanner =
    document.getElementById('form-banner');

if(formBanner) {

    formBanner.addEventListener('submit', function(e){

        e.preventDefault();

        const banner = {

            titulo:
                document.getElementById('banner-titulo').value,

            subtitulo:
                document.getElementById('banner-subtitulo').value,

            imagem:
                document.getElementById('banner-imagem').value,

            logo:
                document.getElementById('banner-logo-input').value
        };

        localStorage.setItem(
            'bannerInfo',
            JSON.stringify(banner)
        );

        alert('Banner atualizado!');
    });
}

/* =========================================
PRODUTORES
========================================= */

const formProdutor =
    document.getElementById('form-produtor');

if(formProdutor) {

    formProdutor.addEventListener('submit', function(e){

        e.preventDefault();

        const produtor = {

            nome:
                document.getElementById('nome').value,

            historia:
                document.getElementById('historia').value,

            produto:
                document.getElementById('produto').value,

            imagem:
                document.getElementById('imagem').value
        };

        let produtores =
            JSON.parse(localStorage.getItem('produtores')) || [];

        produtores.push(produtor);

        localStorage.setItem(
            'produtores',
            JSON.stringify(produtores)
        );

        alert('Produtor cadastrado!');

        formProdutor.reset();

        carregarProdutoresAdmin();
    });
}

/* =========================================
LISTAR PRODUTORES
========================================= */

function carregarProdutoresAdmin() {

    const lista =
        document.getElementById('lista-admin-produtores');

    if(!lista) return;

    lista.innerHTML = '';

    let produtores =
        JSON.parse(localStorage.getItem('produtores')) || [];

    produtores.forEach((produtor, index) => {

        lista.innerHTML += `

            <div class="admin-card">

                <img src="${produtor.imagem}">

                <h3>${produtor.nome}</h3>

                <p>${produtor.produto}</p>

                <br>

                <button onclick="removerProdutor(${index})"
                        class="remove-btn">

                    Remover

                </button>

            </div>
        `;
    });
}

function removerProdutor(index) {

    let produtores =
        JSON.parse(localStorage.getItem('produtores')) || [];

    produtores.splice(index, 1);

    localStorage.setItem(
        'produtores',
        JSON.stringify(produtores)
    );

    carregarProdutoresAdmin();
}

carregarProdutoresAdmin();

/* =========================================
FEIRA
========================================= */

const formFeira =
    document.getElementById('form-feira');

if(formFeira) {

    formFeira.addEventListener('submit', function(e){

        e.preventDefault();

        const feira = {

            local:
                document.getElementById('local-feira').value,

            data:
                document.getElementById('data-feira').value,

            horario:
                document.getElementById('horario-feira').value
        };

        localStorage.setItem(
            'feiraInfo',
            JSON.stringify(feira)
        );

        alert('Informações salvas!');
    });
}

function removerFeira() {

    localStorage.removeItem('feiraInfo');

    alert('Informações removidas!');

    location.reload();
}

/* =========================================
AVISOS
========================================= */

const formAviso =
    document.getElementById('form-aviso');

if(formAviso) {

    formAviso.addEventListener('submit', function(e){

        e.preventDefault();

        const aviso = {

            texto:
                document.getElementById('texto-aviso').value,

            tempo:
                document.getElementById('tempo-aviso').value
        };

        let avisos =
            JSON.parse(localStorage.getItem('avisos')) || [];

        avisos.push(aviso);

        localStorage.setItem(
            'avisos',
            JSON.stringify(avisos)
        );

        alert('Aviso publicado!');

        formAviso.reset();

        carregarAvisosAdmin();
    });
}

function carregarAvisosAdmin() {

    const lista =
        document.getElementById('lista-avisos-admin');

    if(!lista) return;

    lista.innerHTML = '';

    let avisos =
        JSON.parse(localStorage.getItem('avisos')) || [];

    avisos.forEach((aviso, index) => {

        lista.innerHTML += `

            <div class="admin-card">

                <p>${aviso.texto}</p>

                <small>
                    ⏰ ${aviso.tempo}
                </small>

                <br><br>

                <button onclick="removerAviso(${index})"
                        class="remove-btn">

                    Remover

                </button>

            </div>
        `;
    });
}

function removerAviso(index) {

    let avisos =
        JSON.parse(localStorage.getItem('avisos')) || [];

    avisos.splice(index, 1);

    localStorage.setItem(
        'avisos',
        JSON.stringify(avisos)
    );

    carregarAvisosAdmin();
}

carregarAvisosAdmin();

/* =========================================
RECEITAS
========================================= */

const formReceita =
    document.getElementById('form-receita');

if(formReceita) {

    formReceita.addEventListener('submit', function(e){

        e.preventDefault();

        const receita = {

            nome:
                document.getElementById('nome-receita').value,

            descricao:
                document.getElementById('descricao-receita').value,

            imagem:
                document.getElementById('imagem-receita').value
        };

        let receitas =
            JSON.parse(localStorage.getItem('receitas')) || [];

        receitas.push(receita);

        localStorage.setItem(
            'receitas',
            JSON.stringify(receitas)
        );

        alert('Receita adicionada!');

        formReceita.reset();

        carregarReceitasAdmin();
    });
}

function carregarReceitasAdmin() {

    const lista =
        document.getElementById('lista-receitas-admin');

    if(!lista) return;

    lista.innerHTML = '';

    let receitas =
        JSON.parse(localStorage.getItem('receitas')) || [];

    receitas.forEach((receita, index) => {

        lista.innerHTML += `

            <div class="admin-card">

                <img src="${receita.imagem}">

                <h3>${receita.nome}</h3>

                <p>${receita.descricao}</p>

                <br>

                <button onclick="removerReceita(${index})"
                        class="remove-btn">

                    Remover

                </button>

            </div>
        `;
    });
}

function removerReceita(index) {

    let receitas =
        JSON.parse(localStorage.getItem('receitas')) || [];

    receitas.splice(index, 1);

    localStorage.setItem(
        'receitas',
        JSON.stringify(receitas)
    );

    carregarReceitasAdmin();
}

carregarReceitasAdmin();
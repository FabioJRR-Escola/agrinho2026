function mostrarSecao(id) {

    console.log('Abrindo seção:', id);

    const secoes = document.querySelectorAll('.admin-section');

    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    const secaoSelecionada = document.getElementById(id);

    if(secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }

    return false;
}

/* =========================
   PRODUTORES
========================= */

const listaProdutores = document.getElementById('lista-produtores');
const listaProdutos = document.getElementById('lista-produtos');

if(!localStorage.getItem('produtores')) {
    localStorage.setItem('produtores', JSON.stringify([]));
}

const produtores = JSON.parse(localStorage.getItem('produtores')) || [];

if(listaProdutores) {

    produtores.forEach(produtor => {

        const cardProdutor = document.createElement('div');

        cardProdutor.classList.add('card');

        cardProdutor.innerHTML = `
            <img src="${produtor.imagem}">

            <h3>${produtor.nome}</h3>

            <p>${produtor.historia}</p>

            <p><strong>Produto:</strong> ${produtor.produto}</p>
        `;

        listaProdutores.appendChild(cardProdutor);
    });
}

if(listaProdutos) {

    produtores.forEach(produtor => {

        const cardProduto = document.createElement('div');

        cardProduto.classList.add('card');

        cardProduto.innerHTML = `
            <img src="${produtor.imagem}">

            <h3>${produtor.produto}</h3>

            <p>Produzido por ${produtor.nome}</p>
        `;

        listaProdutos.appendChild(cardProduto);
    });
}

/* =========================
   FEIRA
========================= */

const feiraInfo = JSON.parse(localStorage.getItem('feiraInfo'));

const feiraCard = document.getElementById('feira-info-card');

if(feiraInfo && feiraCard) {

    feiraCard.innerHTML = `
        <p>📍 ${feiraInfo.local}</p>
        <p>📅 ${feiraInfo.data}</p>
        <p>🕘 ${feiraInfo.horario}</p>
    `;
}

/* =========================
   CADASTRAR PRODUTOR
========================= */

const form = document.getElementById('form-produtor');

if(form) {

    form.addEventListener('submit', function(e){

        e.preventDefault();

        const produtor = {

            nome: document.getElementById('nome').value,

            historia: document.getElementById('historia').value,

            produto: document.getElementById('produto').value,

            imagem: document.getElementById('imagem').value
        };

        let produtores = JSON.parse(localStorage.getItem('produtores')) || [];

        produtores.push(produtor);

        localStorage.setItem('produtores', JSON.stringify(produtores));

        alert('Produtor adicionado com sucesso!');

        form.reset();

        carregarProdutores();
    });
}

/* =========================
   LISTAR PRODUTORES
========================= */

function carregarProdutores() {

    const lista = document.getElementById('lista-admin-produtores');

    if(!lista) return;

    lista.innerHTML = '';

    let produtores = JSON.parse(localStorage.getItem('produtores')) || [];

    produtores.forEach((produtor, index) => {

        lista.innerHTML += `

            <div class="admin-card">

                <img src="${produtor.imagem}" width="100%">

                <h3>${produtor.nome}</h3>

                <p>${produtor.produto}</p>

                <div class="admin-actions">

                    <button onclick="editarProdutor(${index})">
                        Editar
                    </button>

                    <button onclick="removerProdutor(${index})" class="remove-btn">
                        Remover
                    </button>

                </div>

            </div>
        `;
    });
}

/* =========================
   REMOVER PRODUTOR
========================= */

function removerProdutor(index) {

    let produtores = JSON.parse(localStorage.getItem('produtores')) || [];

    produtores.splice(index, 1);

    localStorage.setItem('produtores', JSON.stringify(produtores));

    carregarProdutores();
}

/* =========================
   EDITAR PRODUTOR
========================= */

function editarProdutor(index) {

    let produtores = JSON.parse(localStorage.getItem('produtores')) || [];

    const produtor = produtores[index];

    document.getElementById('nome').value = produtor.nome;

    document.getElementById('historia').value = produtor.historia;

    document.getElementById('produto').value = produtor.produto;

    document.getElementById('imagem').value = produtor.imagem;

    produtores.splice(index, 1);

    localStorage.setItem('produtores', JSON.stringify(produtores));

    mostrarSecao('cadastro-produtor');
}

/* =========================
   FEIRA ADMIN
========================= */

const formFeira = document.getElementById('form-feira');

if(formFeira) {

    formFeira.addEventListener('submit', function(e){

        e.preventDefault();

        const feira = {

            local: document.getElementById('local-feira').value,

            data: document.getElementById('data-feira').value,

            horario: document.getElementById('horario-feira').value
        };

        localStorage.setItem('feiraInfo', JSON.stringify(feira));

        alert('Informações da feira atualizadas!');
    });
}

/* =========================
   AVISOS
========================= */

const formAviso = document.getElementById('form-aviso');

if(formAviso) {

    formAviso.addEventListener('submit', function(e){

        e.preventDefault();

        let avisos = JSON.parse(localStorage.getItem('avisos')) || [];

        avisos.push(document.getElementById('texto-aviso').value);

        localStorage.setItem('avisos', JSON.stringify(avisos));

        carregarAvisos();

        formAviso.reset();
    });
}

function carregarAvisos() {

    const listaAvisos = document.getElementById('lista-avisos');

    if(!listaAvisos) return;

    listaAvisos.innerHTML = '';

    let avisos = JSON.parse(localStorage.getItem('avisos')) || [];

    avisos.forEach(aviso => {

        listaAvisos.innerHTML += `

            <div class="aviso-card">

                <p>${aviso}</p>

            </div>
        `;
    });
}

/* =========================
   RECEITAS
========================= */

const formReceita = document.getElementById('form-receita');

if(formReceita) {

    formReceita.addEventListener('submit', function(e){

        e.preventDefault();

        const receita = {

            nome: document.getElementById('nome-receita').value,

            descricao: document.getElementById('descricao-receita').value,

            imagem: document.getElementById('imagem-receita').value
        };

        let receitas = JSON.parse(localStorage.getItem('receitas')) || [];

        receitas.push(receita);

        localStorage.setItem('receitas', JSON.stringify(receitas));

        formReceita.reset();

        carregarReceitas();

        alert('Receita adicionada com sucesso!');
    });
}

function carregarReceitas() {

    const listaReceitas = document.getElementById('lista-receitas-admin');

    if(!listaReceitas) return;

    listaReceitas.innerHTML = '';

    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];

    receitas.forEach((receita, index) => {

        listaReceitas.innerHTML += `

            <div class="admin-card">

                <img src="${receita.imagem}" width="100%">

                <h3>${receita.nome}</h3>

                <p>${receita.descricao}</p>

                <div class="admin-actions">

                    <button onclick="removerReceita(${index})" class="remove-btn">
                        Remover
                    </button>

                </div>

            </div>
        `;
    });
}

function removerReceita(index) {

    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];

    receitas.splice(index, 1);

    localStorage.setItem('receitas', JSON.stringify(receitas));

    carregarReceitas();
}

/* =========================
   INICIALIZAÇÃO
========================= */

carregarProdutores();

carregarAvisos();

carregarReceitas();
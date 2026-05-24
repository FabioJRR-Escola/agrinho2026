if(!localStorage.getItem('produtores')) {
    localStorage.setItem('produtores', JSON.stringify([]));
}

const produtores = JSON.parse(localStorage.getItem('produtores'));

const listaProdutores = document.getElementById('lista-produtores');
const listaProdutos = document.getElementById('lista-produtos');

const feiraInfo = JSON.parse(localStorage.getItem('feiraInfo'));

const feiraCard = document.getElementById('feira-info-card');

if(feiraInfo && feiraCard) {
    feiraCard.innerHTML = `
        <p>📍 ${feiraInfo.local}</p>
        <p>📅 ${feiraInfo.data}</p>
        <p>🕘 ${feiraInfo.horario}</p>
    `;
}

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

    const cardProduto = document.createElement('div');
    cardProduto.classList.add('card');

    cardProduto.innerHTML = `
        <img src="${produtor.imagem}">

        <h3>${produtor.produto}</h3>

        <p>Produzido por ${produtor.nome}</p>
    `;

    listaProdutos.appendChild(cardProduto);
});
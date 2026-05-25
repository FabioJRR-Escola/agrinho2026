function mostrarSecao(id) {

    const secoes = document.querySelectorAll('.admin-section');

    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    const secaoSelecionada =
        document.getElementById(id);

    if(secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}

/* =========================================
BANNER
========================================= */

const formBanner = document.getElementById('form-banner');

if(formBanner) {

    formBanner.addEventListener('submit', function(e){

        e.preventDefault();

        const banner = {

            titulo: document.getElementById('banner-titulo').value,

            subtitulo: document.getElementById('banner-subtitulo').value,

            imagem: document.getElementById('banner-imagem').value,

            logo: document.getElementById('banner-logo-input').value
        };

        localStorage.setItem(
            'bannerInfo',
            JSON.stringify(banner)
        );

        alert('Banner atualizado!');
    });
}

const bannerInfo = JSON.parse(
    localStorage.getItem('bannerInfo')
);

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

    if(titulo) {
        titulo.innerText = bannerInfo.titulo;
    }

    if(subtitulo) {
        subtitulo.innerText = bannerInfo.subtitulo;
    }
}
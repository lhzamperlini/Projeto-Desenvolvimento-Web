function carregarHTML(url, elemento) {
    fetch(url).then((resposta) => {
        return resposta.text();
    }).then((html) => {
        elemento.innerHTML = html;
    });
}

function getMain() {
    return document.getElementsByTagName('main')[0];
}
carregarHTML('html/form.html', getMain());

var btnCadastro = document.getElementById('btnCadastro');
btnCadastro.onclick = () => {
    carregarHTML('html/form.html', getMain());
};

var btnViagem = document.getElementById('btnViagem');
btnViagem.onclick = () => {
    carregarHTML('html/teste.html', getMain());
};





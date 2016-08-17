/*para mostrar mais de 4 filmes com o click do botao */
$('#botao-mais-filmes-next').click(mostraFilmes);
$('#botao-mais-filmes-prev').click(mostraFilmes);

function mostraFilmes() {
    var filmes = $('.filmes');

    if (filmes.hasClass('mostra-primeiros-filmes')) {
        filmes.removeClass('mostra-primeiros-filmes');
        filmes.addClass('mostra-outros-filmes');

    } else if (filmes.hasClass('mostra-outros-filmes')) {
        filmes.removeClass('mostra-outros-filmes');
        filmes.addClass('mostra-primeiros-filmes');
    }

}

/*para janela popup */
var filmesLinks = document.querySelectorAll('.mostra-sinopse');

for (var i = 0; i < filmesLinks.length; i++) {
    var filmeLink = filmesLinks[i];
    filmeLink.addEventListener('click', mostraModal);
}

//mostra modal
function mostraModal() {

    //pegando o titulo do elemento que eu clicar
    var tituloFilme = this.lastElementChild.innerHTML;

    //criando a modal
    var divModal = $('<div>').addClass('modal-filmes');
    var buttonModal = $('<button>Fechar</button>').addClass('fecha-modal');
    buttonModal.click(fechaModal);

    var pModal = $('<p>').textContent = tituloFilme;
    var modal = divModal.append(buttonModal).append(pModal);

    //linkando a modal com elemento da pagina
    $('.filmes').append(modal);

    /*var divPop = document.querySelector('.modal-filmes');
    divPop.style.display = "block";*/
}

//fecha modal
function fechaModal() {
    console.log(this);
    console.log('oi');
    var xpto = $('.modal-filmes');


}
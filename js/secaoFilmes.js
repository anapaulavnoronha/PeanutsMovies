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
    var tituloFilme = $(this).find('.titulo-filme').text();
    var sinopseFilme = $(this).find('.sinopse-filme').text();

    //criando a modal
    var divModal = $('<div>').addClass('modal-filmes');
    var buttonModal = $('<button>').addClass('botao-fecha-modal');
    buttonModal.click(fechaModal);

    var pModal = $('<p>').addClass('titulo-modal').html(tituloFilme);

    var sinopseModal = $('<p>').addClass('sinopse-filme').html(sinopseFilme).css('display', 'block');

    var modal = divModal.append(buttonModal).append(pModal).append(sinopseModal);

    //linkando a modal com elemento da pagina
    $('.filmes').append(modal);

}

//fecha modal
function fechaModal() {
    $('.modal-filmes').hide();
}
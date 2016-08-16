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
$('.mostra-sinopse').on('click', mostraPopUp);

function mostraPopUp() {
    var divPop = document.querySelector('#janela-popup');
    divPop.style.display = "block";
}

$('#fecha-popup').on('click', fechaPopUp);

function fechaPopUp() {
    var divPop2 = document.querySelector('#janela-popup');
    divPop2.style.display = "none";
}
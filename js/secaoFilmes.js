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

    //pegando o titulo, sinops e qtsestrela do elemento que eu clicar
    var tituloFilme = $(this).find('.titulo-filme').text();
    var sinopseFilme = $(this).find('.sinopse-filme').text();
    var qtdEstrelas = $(this).find('.qtd-estrelas').text();

    //criando a modal
    var divModal = $('<div>').addClass('modal-filmes');

    //criando a div cabecalho (engloba tituloModal e buttonModal) ficara dentro da modal
    var divCabecalhoModal = $('<div>').addClass('modal-cabecalho-filmes');

    var buttonModal = $('<button>').addClass('botao-fecha-modal');
    buttonModal.click(fechaModal);

    var pModal = $('<p>').addClass('titulo-modal').html(tituloFilme);

    //divCabecalhoModal com o titulo
    divCabecalhoModal.append(pModal);

    //estrelas ficam no cabecalho - divCabecalhoModal com as estrelas
    verificaQtdEstrelas(qtdEstrelas, divCabecalhoModal);

    //divCabecalhoModal com o botao - div Pronta
    divCabecalhoModal.append(buttonModal);

    //fora da divCabecalhoModal
    var sinopseModal = $('<p>').addClass('sinopse-filme').html(sinopseFilme).css('display', 'block');

    //Modal completa
    var modal = divModal.append(divCabecalhoModal).append(sinopseModal);

    setTimeout(function () {
        modal.fadeIn(100);
        $('.filmes').append(modal);
    }, 400);

}

//fecha modal
function fechaModal() {
    var modalFilme = $('.modal-filmes').addClass('modal--some');
    setTimeout(function () {
        modalFilme.hide();
    }, 600);

}

function verificaQtdEstrelas(qtdEstrelas, divCabecalhoModal) {
    var estrelaModal = $('<p>').addClass('qtd-estrelas');

    switch (qtdEstrelas) {
    case '1':
        estrelaModal.addClass('uma-estrela');
        return divCabecalhoModal.append(estrelaModal);
        break;
    case '2':
        estrelaModal.addClass('duas-estrelas');
        return divCabecalhoModal.append(estrelaModal);
        break;
    case '3':
        estrelaModal.addClass('tres-estrelas');
        return divCabecalhoModal.append(estrelaModal);
        break;
    case '4':
        estrelaModal.addClass('quatro-estrelas');
        return divCabecalhoModal.append(estrelaModal);
        break;
    case '5':
        estrelaModal.addClass('cinco-estrelas');
        return divCabecalhoModal.append(estrelaModal);
        break;
    default:
        console.log('erro');
    }

}
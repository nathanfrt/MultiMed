function exibeQuestoes(){
    $(".cardsQuestions .cardDescricao").toggleClass("exibeEsconde");
    $(".cardsQuestions .cardTitulo i").toggleClass("fa-chevron-up fa-chevron-down");
};
    
function fecharModal(){
    $("#modal").hide();
}

function botaoQueroAgora(){
    $("#campoMensagemModal").show();
    $("#campos").hide();
    $("#modal .buttonQuero").hide();
}

function cookieAceitar(){
    $("#politicaCookie").hide();
}

function botaoQuero(){
    $("#modal").show();
    $("#campos").hide();
    $("#modal .buttonQuero").hide();
    $("#campoMensagemModal").show();
}

function clickCategorias(){
    $(".categorias").toggleClass("hidden")
}

/* Esse script pode ser utilizado para alterar a imagem de desktop para mobile
$(function(){
 var larg = screen.width;
 if (larg < 768){
     $(".logoCabecalho img").attr("src", "/Imagens/bannerobile.png");
 }
})
*/

$(function(){
    var larg = screen.width;
    if (larg < 768){
        $(".bannerRodape .bannerImgRodape img").attr("src", "/Imagens/bannerRodapeMobile.png");
    }
   })

//=require bundle

// add scroll section hack functions
function jsel(label) {
    $('html, body').animate({
        scrollTop: $("#"+label).offset().top -
        $('.mdc-top-app-bar').height() - 2
    }, 1000);

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
}
$(document).ready(function() {
    $(".item-menu").click((e) => {
        const dataLayout = e.target.dataset.layout;
        $(".layout").addClass('d-none');
        $(".item-menu").removeClass('active');
        $('*[data-layout="'+dataLayout+'"]').addClass('active')
        $("#"+dataLayout).removeClass('d-none')
    })
    $(".item-top-menu").click((e) => {
        const dataLayout = e.target.dataset.layout;
        $(".item-top-menu").removeClass('active');
        $(e.target).addClass('active');
    })
});
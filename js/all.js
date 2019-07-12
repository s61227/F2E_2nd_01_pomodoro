$(".js-accordion__list").on("click", function () {
    if ($(this).hasClass('js-accordion__active')) {
        $(this).removeClass("js-accordion__active");
        $(this).siblings('.js-accordion__content').slideUp(300);
        $(".js-accordion__list i").empty().text("arrow_drop_up");
    } else {
        $(this).find("i").empty().text("arrow_drop_down");
        $(this).addClass("js-accordion__active");
        $(this).siblings('.js-accordion__content').slideDown(300);
    }
});




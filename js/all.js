// accordin
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

// checkbox 效果
$('.e-checkWrap').click(function(){
    var radioStatus = $(this).find('input[type="checkbox"]').val();
    if(radioStatus == 'on'){
        $(this).css('text-decoration', 'line-through');
    }else{
        $(this).css('text-decoration', 'none');
    }
});

// radio 效果
var musicArry = document.querySelectorAll('.p-ringtones .e-checkWrap');
var thisMusic = document.querySelector('audio');
musicArry.forEach(element => {
    element.addEventListener('click', playMusic, false);
});

function playMusic(e){
    if(e.target.tagName === 'INPUT'){
        if(e.target.value !== 'on'){
            var src = 'music/'+e.target.value+'.mp3';
            thisMusic.setAttribute('src', src);
            thisMusic.play();
        }else{
            thisMusic.pause();
        }
    } 
};



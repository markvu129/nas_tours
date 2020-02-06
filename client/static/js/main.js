function playVideo(el) {
    let video = document.getElementById('video1');

    if (video.paused) {
        // Play the video
        video.play();
        el.removeClass('paused').addClass('playing');
    }
    else {
        // Pause the video
        video.pause();
        el.removeClass('playing').addClass('paused');
    }
}

$(document).on('click', '.intro-video', function(e) {
    playVideo($('.js-video-control'));
    e.preventDefault();
});

$(document).on('click', '.js-video-control', function(e) {
    playVideo($('.js-video-control'));
    e.preventDefault();
});

$(window).scroll(function() {
    var $height = $(window).scrollTop();
    if($height > 250) {
        let video = document.getElementById('video1');
        video.pause();
        $('.js-video-control').removeClass('playing').addClass('paused')
    }
});

$(document).ready(function() {
    $("#mute").click( function (){
        if( $(".intro-video").prop('muted') ) {
            $(".intro-video").prop('muted', false);
            $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
        } else {
            $(".intro-video").prop('muted', true);
            $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
        }
    });
});
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
    let video = document.getElementById('video1');
    if($height > 250) {
        video.pause();
        $('.js-video-control').removeClass('playing').addClass('paused')
    }
    else {
        video.play();
        $('.js-video-control').removeClass('paused').addClass('playing')
    }
});


$(document).ready(function() {
    $("#mute").click( function (){
        if( $(".intro-video").prop('muted') ) {
            $(".intro-video").prop('muted', false);
            $("#mute").css("background-image","url(/assets/img/images/unmute.svg)");
        } else {
            $(".intro-video").prop('muted', true);
            $("#mute").css("background-image","url(/assets/img/images/mute.svg)");
        }
    });

    $('.p-tour-timeline-text:nth-child(3)').hover(function(){
        $('.bus-icon').addClass('bus-icon-2').removeClass('bus-icon-3');
        $('.p-tour-timeline-text:nth-child(2)').addClass('no-shadow')
    },function(){
        $('.p-tour-timeline-text:nth-child(2)').removeClass('no-shadow')
    });

    $('.p-tour-timeline-text:nth-child(4)').hover(function(){
        $('.bus-icon').addClass('bus-icon-3');
        $('.p-tour-timeline-text:nth-child(2)').addClass('no-shadow')
    },function(){
        $('.p-tour-timeline-text:nth-child(2)').removeClass('no-shadow')
    });

    $('.p-tour-timeline-text:nth-child(5)').hover(function(){
        $('.bus-icon').addClass('bus-icon-4');
        $('.p-tour-timeline-text:nth-child(2)').addClass('no-shadow')
    },function(){
        $('.bus-icon').removeClass('bus-icon-4').removeClass('bus-icon-2').removeClass('bus-icon-3');
        $('.p-tour-timeline-text:nth-child(2)').removeClass('no-shadow')
    });

    $('.p-tour-timeline-text:nth-child(2)').hover(function(){
        $('.bus-icon').removeClass('bus-icon-4').removeClass('bus-icon-2').removeClass('bus-icon-3');
    },function(){
    });

});
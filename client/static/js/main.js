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

$(document).on('click', '.js-video-control', function(e) {
    playVideo($(this));
    e.preventDefault();
});

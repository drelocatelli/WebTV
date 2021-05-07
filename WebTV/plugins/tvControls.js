let televisao = document.querySelector('#televisao')
let videoPlayer = document.querySelector('video[name=videoPlayer]')

function TVcontrols() {
    let controls = document.querySelector("div.controls .btn-controls");
    
    controls.style.visibility = "hidden";
    
    setTimeout(() => {
        controls.style.visibility = "visible";
    }, 2000);

    controls.onclick = function () {
        switch (controls.dataset.target) {
            case 'pausar':
                videoPlayer.pause()
                controls.innerText = "play_arrow"
                controls.dataset.target = "play"
                break;

            case 'play':
            default:
                videoPlayer.play()
                controls.innerText = "pause"
                controls.dataset.target = "pausar"
                break;
        }
    }

    let fixed = document.querySelector("div.controls .btn-fixed");
    fixed.style.visibility = "hidden";
    setTimeout(() => {
        fixed.style.visibility = "visible";
    }, 2000);

    fixed.onclick = function () {
        videoPlayer.requestPictureInPicture();
    }

    let fullscreen = document.querySelector(".btn-fullscreen")
    fullscreen.onclick = function(){
        videoPlayer.requestFullscreen()
    }
}

TVcontrols()

function videoPlayerProperties() {
    videoPlayer.autoplay = true;
    videoPlayer.controls = false;
    videoPlayer.style = "width:800px; height:450px;"
    videoPlayer.id = "example-video"
    videoPlayer.classList.add("video-js", "vjs-default-skin")
    videoPlayer.textTracks.mode = 'disabled';
    
    console.log(videoPlayer.videoTracks)
}

videoPlayerProperties()



var video = document.getElementById("playerCustomizado");

// PLAY E PAUSE
function playPause(){
    if(video.paused == true){
        video.play();
        video.width = 782
    }else
         video.pause();
}

//AMPLIAR
function Ampliar(){
    video.width = 1000;
}

//REDUZIR
function Reduzir(){
    video.width = 400;
}

//TELA CHEIA
function Telacheia(){
    video.requestFullscreen();
}

//TELA NORMAL
function Tamanhonormal(){
    video.width = 782;
}

//VOLUME + 
function Volumemais(){
    video.volume = video.volume + 0.9;
}

//VOLUME -
function Volumemenos(){
    video.volume = video.volume - 0.1;
}

//MUTE
function Mute(){
    if(video.muted){
        video.muted = false;
    }else{ 
        video.muted = true;
    }
    
}

chrome.runtime.onMessage.addListener((msg, sender, response)=> {
    if(msg.name =="playTrack" ){
        
        var trackName = msg.track
        var audioEle= document.querySelector('.audio-element');
        audioEle.src = 'track-'+trackName+'.mp3';
        audioEle.play();

    }
if(msg.name=="pauseTrack"){
    var auidoEle = document.querySelector('.audio-element');
    auidoEle.pause()
}



});
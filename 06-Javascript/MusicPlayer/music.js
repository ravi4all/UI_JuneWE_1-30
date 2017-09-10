window.addEventListener("load", init);
        function init(){
            a = document.getElementsByTagName("a");
            document.getElementById("slider").addEventListener("change", forwardSong);
            for(var i=0; i<a.length; i++){
                a[i].addEventListener("click", playSong);
            }
        }
        function playSong(){
            value = event.srcElement.innerHTML;
            audio = document.getElementById("audio");
            audio.src = 'audio/'+value+'.mp3';
            audio.play();
            setInterval(slider, 500);
        }
        function playSong1(){
            audio.play();
        }
        function pauseSong(){
            audio.pause();
        }
        function stopSong(){
            audio.pause();
            audio.currentTime = 0;
        }
        function slider(){
            startTime = document.getElementById("startTime");
            startTime.innerHTML = parseInt(audio.currentTime);
            endTime = document.getElementById("totalTime");
            endTime.innerHTML = audio.duration;
            s = document.getElementById("slider");
            s.value = parseInt(audio.currentTime);
            s.max = audio.duration;
            /*console.log(s.value);*/
        }
function forwardSong(){
    audio.currentTime = s.value;
}

var SR=window.webkitSpeechRecognition;
var recognition = new SR();
function listen() {
    document.getElementById("textbox").innerHTML ="";
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content;
}

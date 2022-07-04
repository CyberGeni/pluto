ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 10000 });


function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // get image on button
    var listenButton = document.getElementById("listenButton");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>Listening...</small>";
        listenButton.classList.add('animate-ping')
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>Done.</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = "<b>Text:</b> " + transcript /* + "<br/> <b>Confidence:</b> " + confidence*100+"%" */;
        output.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}
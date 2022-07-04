function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>Listening...</small>";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<small>Done.</small>";
        recognition.stop();
    }
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = transcript /* + "<br/> <b>Confidence:</b> " + confidence*100+"%" */;
        output.classList.remove("hide");
    };
  
     // start recognition
     recognition.start();
}

/* function runTextToSpeech() {
    let speech = new SpeechSynthesisUtterance();

    // Set Speech Language
    speech.lang = "en";

    document.querySelector("#start").addEventListener("click", () => {
        // Set the text property with the value of the textarea
        speech.text = document.querySelector("textarea").value;
    
        // Start Speaking
        window.speechSynthesis.speak(speech);
    });
} */

function writeText() {
    var action = document.getElementById("action");
    var text = document.getElementsByTagName("textarea");
    action.innerHTML = "<small>Write something...</small>";
    text.setAttribute("contenteditable", "true");
    text.setAttribute("disabled", "false");
}
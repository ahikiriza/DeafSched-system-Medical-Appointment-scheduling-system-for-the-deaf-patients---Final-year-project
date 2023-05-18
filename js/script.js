// script.js

function increaseFontSize() {
    var content = document.getElementById("content");
    var currentSize = parseInt(window.getComputedStyle(content).fontSize);
    content.style.fontSize = (currentSize + 1) + "px";
}

function decreaseFontSize() {
    var content = document.getElementById("content");
    var currentSize = parseInt(window.getComputedStyle(content).fontSize);
    content.style.fontSize = (currentSize - 1) + "px";
}

function changeColorScheme(selectElement) {
    var body = document.body;
    if (selectElement.value === "highContrast") {
        body.classList.add("high-contrast");
    } else {
        body.classList.remove("high-contrast");
    }
}

function saveTranscription() {
    var content = document.getElementById("content").innerText;
    // Implement the logic to save the transcription here (e.g., store in a database, write to a file, etc.)
    alert("Transcription saved!");
}

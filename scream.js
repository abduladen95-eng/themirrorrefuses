function activateScream() {
    const status = document.getElementById("screamStatus");
    const audio = document.getElementById("screamAudio");
    audio.play();
    status.innerHTML = "⚠️ SCREAM.EXE IS RUNNING...";
    setTimeout(() => {
        status.innerHTML = "🩸 THE MIRROR HAS REFUSED. TWUSSEH FEEDS.";
    }, 3000);
}

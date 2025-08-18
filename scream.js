function activateScream() {
    const status = document.getElementById("screamStatus");
    status.innerHTML = "⚠️ SCREAM.EXE IS RUNNING...";
    setTimeout(() => {
        status.innerHTML = "🩸 THE MIRROR HAS REFUSED. TWUSSEH FEEDS.";
    }, 3000);
}

const messages = [
    "Intitializing Hacking",
    "Reading Your Files",
    "Password Files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning Up All Data"
];

window.onload = function() {
    const container = document.getElementById('text-container');
    let messageIndex = 0;

    function addDots(element) {
        let dots = 0;
        return setInterval(() => {
            dots = (dots + 1) % 4;
            element.textContent = messages[messageIndex] + '.'.repeat(dots);
        }, 500);
    }

    function showNextMessage() {
        if (messageIndex < messages.length) {
            const p = document.createElement('p');
            container.appendChild(p);
            const dotInterval = addDots(p);
            
            setTimeout(() => {
                clearInterval(dotInterval);
                messageIndex++;
                showNextMessage();
            }, 3000);
        }
    }

    showNextMessage();
};
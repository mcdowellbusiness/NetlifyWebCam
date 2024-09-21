const video = document.getElementById('video');
const startWebcamButton = document.getElementById('startWebcam');
const stopWebcamButton = document.getElementById('stopWebcam');
let stream;

startWebcamButton.addEventListener('click', async () => {
    try {
        // Request access to the default webcam
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error accessing webcam: ", err);
    }
});

stopWebcamButton.addEventListener('click', () => {
    if (stream) {
        // Stop all video streams
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
});

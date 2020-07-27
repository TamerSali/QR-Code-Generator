
window.onload = () => {
    let userInput = document.querySelector("#user-input");
    let qr = new QRious({
        element: document.getElementById('qr'),
        value: "",
        level: 'H', // Error correction level of the QR code (L, M, Q, H)
        mime: 'image/png', // MIME type used to render the image for the QR code
        size: 1000
    });
    userInput.addEventListener("keyup", () => {
        qr.value = userInput.value;
    })
}



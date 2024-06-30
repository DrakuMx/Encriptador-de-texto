const textArea = document.querySelector("#text-int");
const mensaje = document.querySelector("#mensaje");

function btonEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btonDesencriptar() {
    const textEncriptado = desencriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptador) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (stringEncriptador.includes(llaves[i][0])) {
            stringEncriptador = stringEncriptador.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return stringEncriptador;
}

function desencriptar(stringDesencriptador) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptador = stringDesencriptador.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (stringDesencriptador.includes(llaves[i][1])) {
            stringDesencriptador = stringDesencriptador.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    return stringDesencriptador;
}

document.getElementById('copiar').addEventListener('click', function() {
    const textarea = document.getElementById('mensaje');

    if (textarea.value.trim() === '') {
        alert('No hay texto para copiar');
    } else {
        textarea.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    }
});

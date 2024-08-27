const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
    
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""; 
}

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encriptar (stringEncriptada) {
    
    let matrizCode = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++) {
        if(stringEncriptada.includes(matrizCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }

    return stringEncriptada
}

function btnDescriptografar() {
    
    const textoDescriptado = descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = ""; 
}


function descriptar (stringDescriptada) {
    
    let matrizCode = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++) {
        if(stringDescriptada.includes(matrizCode[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }

    return stringDescriptada
}


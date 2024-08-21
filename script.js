document.querySelector(".btn-encriptar").addEventListener("click", () => procesarTexto(encriptarTexto));
document.querySelector(".btn-desencriptar").addEventListener("click", () => procesarTexto(desencriptarTexto));

const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

function procesarTexto(funcionDeTexto) {
    ocultarElementos();
    const cajatexto = document.querySelector(".cajatexto").value;
    resultado.textContent = funcionDeTexto(cajatexto);
}

function ocultarElementos() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    const mapa = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    return mensaje.split('').map(letra => mapa[letra] || letra).join('');
}

function desencriptarTexto(mensaje) {
    const mapaInverso = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    let textoFinal = mensaje;

    for (const [clave, valor] of Object.entries(mapaInverso)) {
        textoFinal = textoFinal.split(clave).join(valor);
    }

    return textoFinal;
}

document.querySelector(".btn-copiar").addEventListener("click", () => {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles");
});

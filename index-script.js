function encripta() {
    var texto = document.getElementById("texto").value.toLowerCase();
    // se encierra la /e/ para que busque todas las e y no solo la primera en la palabra
    // i para que afecte las e y las E
    // g para que afecte toda la palabra
    // m para que a cada palabra
    var textoEncriptado = texto.replace(/e/igm,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");
    document.getElementById("personaje").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
}
function desencripta() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/igm,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm,"u");
    document.getElementById("personaje").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("texto2").innerHTML = textoEncriptado;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
} 
function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    //alert("Texto copiado");
}
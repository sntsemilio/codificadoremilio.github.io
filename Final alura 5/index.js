function validar(texto){
    let mayusculas = /[A-Z]/g;
    let signosespeciales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;áéíóúàèìòù']/g;
    let vacio = "";
    if (texto.match(mayusculas)||texto.match(signosespeciales)){
        modalMayusculas();
        return true;        
    }else if (texto == vacio){
        modalSinTexto();
        return true;
    } else {
        return false;
    }
}

function validarEncriptacion(texto){
    let claves = ["ai","enter","imes","ober","ufat"];
    let [clavea,clavei,clavee,claveo,claveu] = claves;
    if (texto.match(clavea)||texto.match(clavee)||texto.match(clavei)||texto.match(claveo)||texto.match(claveu)){
        return true;
    }else {
        document.querySelector("#ingrese-texto").value = "";
        modalTextoNoEncrip();
        return false;
    }
}

function encriptar(texto){
    textoEncriptado = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    document.querySelector("#resultado").value=textoEncriptado;
    document.querySelector("#ingrese-texto").value = "";
}

function desencriptar(texto){
    textoDesencriptado = texto.replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    document.querySelector("#resultado").value=textoDesencriptado;
    document.querySelector("#ingrese-texto").value = "";
}

function mostrarTexto(){
    document.getElementById("resultado-copiar").style.display= "flex";
    document.getElementById("resultado-copiar").style.visibility= "visible";
    document.getElementById("resultado-imagen").style.display= "none";
    document.getElementById("resultado-imagen").style.visibility= "hidden";
}

function mostrarImagen(){
    document.getElementById("resultado-copiar").style.display= "none";
    document.getElementById("resultado-copiar").style.visibility= "hidden";
    document.getElementById("resultado-imagen").style.display= "flex";
    document.getElementById("resultado-imagen").style.visibility= "visible";
    
}

function modalSinTexto() {
    document.getElementById("contenedor-dos").style.visibility= "visible";        
    document.getElementById("cont-modales").style.display= "flex";
    document.getElementById("modal-sintexto").style.display= "flex";    
}

function modalMayusculas() {
    document.getElementById("contenedor-dos").style.visibility= "visible"; 
    document.getElementById("cont-modales").style.display= "flex";        
    document.getElementById("modal-mayusculas").style.display= "flex";    
}

function modalTextoNoEncrip() {
    document.getElementById("contenedor-dos").style.visibility= "visible";
    document.getElementById("cont-modales").style.display= "flex";        
    document.getElementById("modal-textonoencriptado").style.display= "flex";  
}

function cerrarModal() {
    document.getElementById("contenedor-dos").style.visibility= "hidden";
    document.getElementById("cont-modales").style.display= "none";
    document.getElementById("modal-sintexto").style.display= "none";   
    document.getElementById("modal-mayusculas").style.display= "none";
    document.getElementById("modal-textonoencriptado").style.display= "none";     
}

function textoEnPortapapeles() {      
    document.getElementById("texto-copiado").style.display= "block";
}

function ocultarTextoCopiado() {
    document.getElementById("texto-copiado").style.display= "none";
}

async function copiar(){
    var textoCopiado = document.querySelector("#resultado");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    textoEnPortapapeles();
    setTimeout(mostrarImagen, 2000);
    setTimeout(ocultarTextoCopiado, 2000);
}



let botonEncriptar = document.querySelector("#btn-encriptar").addEventListener("click", function(){
    let texto = document.querySelector("#ingrese-texto").value;
    if (validar(texto) === false) {
        encriptar(texto);
        mostrarTexto();
    }else {
        mostrarImagen();
    }
});

let botonDesencriptar = document.querySelector("#btn-desencriptar").addEventListener("click", function(){
    let texto = document.querySelector("#ingrese-texto").value;
    if (validar(texto) === false && validarEncriptacion(texto) === true) {
        desencriptar(texto);
        mostrarTexto();
    }else {
        mostrarImagen();
    }
})

let botonCopiar = document.querySelector("#btn-copiar").addEventListener("click", copiar);

let botonCerrar = document.querySelector("#btn-cerrar").addEventListener("click", cerrarModal);
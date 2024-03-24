function mostrar(textoModificado){
    var seccionVisible = document.getElementById("textoSalidaVisible");
    var seccionOculta = document.getElementById("textoSalidaOculta");
    var textoMostrar = document.getElementById("textoEncriptado")

    seccionVisible.style.display = "none"
    seccionOculta.style.display = "inline-block";

    textoMostrar.textContent = textoModificado;
}
const copiarBoton = document.getElementById("copiar");
    copiarBoton.addEventListener("click", function() {
        const texto = document.getElementById("textoUsuario").value;
        navigator.clipboard.writeText(texto)
            .then(() => {
                console.log("Texto copiado al portapapeles:", texto);
            })
            .catch(err => {
                console.error("Error al copiar el texto:", err);
            });
    });

document.addEventListener("DOMContentLoaded",function(){
    const textoUsuario = document.getElementById("textoUsuario");
    const botonEncriptar = document.getElementById("encriptar");
    const botonDesencriptar = document.getElementById("desencriptar");

    botonEncriptar.addEventListener("click", function(event){
        const texto = textoUsuario.value.trim();

        if(!/^[a-z\s]+$/.test(texto)){
            alert("Favor utilizar sólo letras minúsculas");
            return;
        }

        const textoModificado = modificarTexto(texto);
        mostrar(textoModificado);

        textoUsuario.value = '';

        function modificarTexto(texto){
            let textoModificado = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
            return textoModificado;
        }
    });
    botonDesencriptar.addEventListener("click",function(){
        const textoDesencriptar = textoUsuario.value.trim();

        const textoDesencriptado = desencriptar(textoDesencriptar);
        mostrar(textoDesencriptado);

        textoUsuario.value = '';
    })
    function desencriptar(textoDesencriptar){
        let textoDesencriptado = textoDesencriptar.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
        return textoDesencriptado;
    }
});

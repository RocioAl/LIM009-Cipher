// Función para la bienvenida
  window.myFunction = () => {
    let name = document.getElementById("name").value;
    document.getElementById("bienvenida").innerHTML = "<center>"+"BIENVENIDO(A) " + name.toUpperCase() + "<br>"  + "<br>" +"Con el algoritmo de Cifrado César puedes ingresar una frase y te devolverá el mismo mensaje encriptado. " +"<br>" +"<br>" + "Descifra una frase para que puedas ingresar a la platarforma de front-end.";
    document.getElementById("biography").style.display="none"
    document.getElementById("summit").style.display="block"

}

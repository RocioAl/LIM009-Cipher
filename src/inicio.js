// Función para la bienvenida
  window.myFunction = () => {
    let name = document.getElementById("name").value;
    document.getElementById("bienvenida").innerHTML = "<center>"+"BIENVENIDO(A) " + name.toUpperCase() + "<br>"  + "<br>" +"Con el algoritmo de Cifrado César puedes ingresar una frase y te devolverá el mismo mensaje encriptado. " +"<br>" +"<br>" + "Descifra una frase para que puedas ingresar a la platarforma de front-end.";
    document.getElementById("biography").style.display="none"
    document.getElementById("summit").style.display="block"


}
//Validando sólo letras
 /*onlyLetters=(e)=> {
    key=e.keyCode || e.which;
    keyboard=String.fromCharCode(key).toLowerCase();
    letters="qwertyuiopasdfghjklñzxcvbnm ";
    special="8-37-38-46-164";
    specialKeys=false;
    for(let i in special){
        if(key==special[i]){
            specialKeys=true;
            break;
       }
    }
    if(letters.indexOf(keyboard)==-1 && !specialKeys){
        return false;
    }
}*/

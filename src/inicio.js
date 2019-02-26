// Función para la bienvenida
myFunction= () => {
  let name = document.getElementById("name").value;
  document.getElementById("bienvenida").innerHTML = "<center>"+"BIENVENIDO(A) " + name.toUpperCase() + "<br>" + "<br>" +"<br>" +" Cifrado cesar es ..... ";
  //document.getElementById("btn").style.display="none"
  document.getElementById("biography").style.display="none"
  document.getElementById("summit").style.display="block"
}

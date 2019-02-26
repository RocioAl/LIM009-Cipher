window.onload = () => {
  const btn = document.getElementById("boton");
  btn.addEventListener('click', () => {
  let text = document.getElementById("mensaje").value;
  let num = document.getElementById("off").value;
  document.getElementById("mensaje2").innerHTML = window.cipher.encode(text, num);
  });
  }

window.onload = () => {

  const botonde = document.getElementById("btnde");
  botonde.addEventListener('click', () => {
  let textde = document.getElementById("mensajede").value;
  let num= document.getElementById("offde").value;


  document.getElementById("mensaje2de").innerHTML = window.cipher.decode(textde, num);
});
  }

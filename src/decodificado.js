window.onload = () => {
  const btnde = document.getElementById("btnde");
  btnde.addEventListener('click', () => { {
  let textde = document.getElementById("mensajede").value;
  let numde = document.getElementById("offde").value;
  document.getElementById("mensajede2").innerHTML = window.cipher.decode(textde, numde);
});
}

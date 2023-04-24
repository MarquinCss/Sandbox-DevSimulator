function mudarCor() {
  var cor = document.getElementById("cor").value;
  document.querySelector(".container").style.backgroundColor = cor;
}
function mudarFont() {
  var font = document.querySelector("#fontSize").value + 'px';
  document.querySelector("#test").style.fontSize = font;
}
function mudarTexto(){
  var texto = document.querySelector("#texto").value 

  document.querySelector(".msg").textContent = texto 
}

function mudarBorderRadius() {
  var border = document.getElementById("borda").value;
  document.querySelector(".container").style.borderRadius = border + "px";
}

//Eu não gostava de querySelector, mas agora prefiro ele!


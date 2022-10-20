//Atualização automática do texto
function atualizarConteudo(idInput, idTexto) {
    document.getElementById(idInput).onchange = function(){
      atualizarConteudoStatico(idInput, idTexto);
    };
};

//Atualização do texto de acordo com o valor inserido no input
function atualizarConteudoStatico(idInput, idTexto) {
  var texto = document.getElementById(idInput).value;
  document.getElementById(idTexto).innerHTML = texto;
};

//Atualização automática de descrição
function atualizarTamanho(idInput, idTexto) {
  document.getElementById(idInput).onchange = function(){
    atualizarTamanhoStatico(idInput, idTexto);
  };
};

//Atualização do texto de acordo com o valor inserido no input de descrição
//com ajuste de tamanho
function atualizarTamanhoStatico(idInput, idTexto) {
  var texto = document.getElementById(idInput).value;
  var tamanhoTexto = texto.length;
  if (tamanhoTexto <= 150){
    document.getElementById(idTexto).style.fontSize = "58px";
  }
  else if(tamanhoTexto > 150 && tamanhoTexto < 250){
    document.getElementById(idTexto).style.fontSize = "46px";
  }
  else{
    document.getElementById(idTexto).style.fontSize = "39px";
  }
  document.getElementById(idTexto).innerHTML = texto;
};

//Atualização automática do texto de acordo com o valor inserido no input de instagram
//com ajuste de tamanho
function atualizarTamanhoInstagram(idInput, idTexto) {
    document.getElementById(idInput).onchange = function(){
      var texto = document.getElementById(idInput).value;
      var tamanhoTexto = texto.length;
      if (tamanhoTexto <= 19){
        document.getElementById(idTexto).style.fontSize = "3.1rem";
      }
      else if(tamanhoTexto > 19 && tamanhoTexto < 25){
        document.getElementById(idTexto).style.fontSize = "2.4rem";
      }
      else{
        document.getElementById(idTexto).style.fontSize = "2rem";
      }
      document.getElementById(idTexto).innerHTML = texto;
    };
};
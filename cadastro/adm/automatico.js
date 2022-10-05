//Atualização automática do texto de acordo com o valor inserido no input
function atualizarConteudo(idInput, idTexto) {
 document.getElementById(idInput).onchange = function(){
   var texto = document.getElementById(idInput).value;
   document.getElementById(idTexto).innerHTML = texto;
 };
};

function atualizarTamanho(idInput, idTexto) {
  document.getElementById(idInput).onchange = function(){
    var texto = document.getElementById(idInput).value;
    var tamanhoTexto = texto.length;
    if (tamanhoTexto < 150){
      document.getElementById(idTexto).style.fontSize = "58px";
    }
    else{
      document.getElementById(idTexto).style.fontSize = "39px";
    }
    document.getElementById(idTexto).innerHTML = texto;
  };
};

atualizarConteudo("inputTitulo","tituloView");
atualizarConteudo("inputNome","nomeView");
//atualizarConteudo("inputDescricao","descricaoView");
atualizarTamanho("inputDescricao","descricaoView");
atualizarConteudo("inputInstagram","instagramView");


//Alteração da cor de fundo da pré-visualização
document.getElementById('coresRadio').onchange = function(){
 
 //Carregar valor selecionado no botão radio
 let corFundo = document.querySelector( 'input[name="cor"]:checked').value; 

 function atualizarFundo(cor){
  document.getElementById('previewBox').style.backgroundColor = cor; 
 }

 switch (corFundo) {
   case "Branco":
     atualizarFundo('#ffffff')
     break;
   case "Amarelo":
     atualizarFundo('#fff491')
     break;
   case "Verde":
     atualizarFundo('#b4ffae')
     break;
   case "Azul":
     atualizarFundo('#cae7ff')
     break;
   case "Rosa":
     atualizarFundo('#ffd0e0')
     break;
   case "Laranja":
     atualizarFundo('#ffd794')
     break;
 case false:
     atualizarFundo('#ffffff')
 }
}
//Fim da alteração da cor de fundo da pré-visualização

//Atualização automatica da foto de perfil
document.getElementById("inputImagem").onchange = function(){
     let foto = document.getElementById('imagemPerfil');
     let leitor = new FileReader();
     leitor.readAsDataURL(event.target.files[0]);
     leitor.onload = function() {
       foto.src = leitor.result; // data url
     };
     foto.onload = function() {
       URL.revokeObjectURL(foto.src) // free memory
     }
}
//Fim da atualização automatica da foto de perfil
//Mudar na área de contato se é whatsapp ou telefone       
document.getElementById("inputWhatsApp").onchange = function(){
 if (document.getElementById("inputWhatsApp").checked == true){
   document.getElementById("idTelefoneTitulo").innerHTML = "WhatsApp:";
 }
 else{
   document.getElementById("idTelefoneTitulo").innerHTML = "Telefone:";
 }
}
//Fim de mudar na área de contato se é whatsapp ou telefone  

//Atualizar número de telefone na preview
document.getElementById("inputTelefone").onchange = function(){
  
  //inserir dados do input na preview
  telefone = document.getElementById("inputTelefone").value;
  document.getElementById("telefoneView").innerHTML = telefone;
  
  //Esconder título na preview se o campo estiver vázio
  tituloTelefone = document.getElementById("idTelefoneTitulo");
  if (document.getElementById("inputTelefone").value.length > 0){
   tituloTelefone.style.display = "inherit";
  }
  else{
   tituloTelefone.style.display = "none";
  }
}
//Fim de atualizar número de telefone
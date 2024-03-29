atualizarConteudo("inputTitulo","tituloView");
atualizarConteudo("inputNome","nomeView");
atualizarTamanho("inputDescricao","descricaoView");
atualizarTamanhoInstagram("inputInstagram","instagramView");

function atualizarBotao(){
  atualizarConteudoStatico("inputTitulo","tituloView");
  atualizarConteudoStatico("inputNome","nomeView");
  atualizarTamanhoStatico("inputDescricao","descricaoView");
  atualizarTamanhoInstagramStatico("inputInstagram","instagramView");
  atualizarWhatsAppStatico("inputWhatsApp","idTelefoneTitulo");
}


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
  atualizarFotoStatico();
}
//Fim da atualização automatica da foto de perfil

function atualizarFotoStatico(){
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


//Mudar na área de contato se é whatsapp ou telefone       
document.getElementById("inputWhatsApp").onchange = function(){
  atualizarWhatsAppStatico("inputWhatsApp","idTelefoneTitulo");
};
//Fim de mudar na área de contato se é whatsapp ou telefone 

function atualizarWhatsAppStatico(idInput,idTexto){
  if (document.getElementById(idInput).checked == true){
    document.getElementById(idTexto).innerHTML = "WhatsApp:";
  }
  else{
    document.getElementById(idTexto).innerHTML = "Telefone:";
  };
};

//Atualizar número de telefone na preview
document.getElementById("inputTelefone").onchange = function(){
  atualizarTelefoneStatico("inputTelefone","telefoneView");
}
//Fim de atualizar número de telefone

function atualizarTelefoneStatico(idInput,idTexto){
  //inserir dados do input na preview
  telefone = document.getElementById(idInput).value;
  document.getElementById(idTexto).innerHTML = telefone;
  
  //Esconder título na preview se o campo estiver vázio
  tituloTelefone = document.getElementById("idTelefoneTitulo");
  if (document.getElementById(idInput).value.length > 0){
   tituloTelefone.style.display = "inherit";
  }
  else{
   tituloTelefone.style.display = "none";
  };
}
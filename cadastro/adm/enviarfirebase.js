const app = firebase.initializeApp(firebaseConfig);

function enviarFirebase(){
    console.log("oi");
    let usuario = {
        titulo: null,
        nome: null,
        instagram: null,
        usarFoto: null,
        telefone: null,
        temWhatsapp: null,
    };
    usuario.titulo = document.getElementById("inputTitulo").value;
    usuario.nome = document.getElementById("inputNome").value;
    usuario.instagram = document.getElementById("inputInstagram").value;
    usuario.usarFoto = document.getElementById("usarFoto").value;
    usuario.telefone = document.getElementById("inputTelefone").value;
    usuario.temWhatsapp = document.getElementById("inputWhatsApp").value;
    const usuarioJsonStr = JSON.stringify(usuario);
    //usuarioKey = pushFirebase("usuarios",usuarioJsonStr);
    updateFirebase("usuarios", "1",usuarioJsonStr);
    console.log("tchau");
};

function pushFirebase(endereco,valor){
  const referencia = firebase.database().ref().child(endereco);
  return referencia.push(valor).key;
};

function updateFirebase(endereco,chave,valor){
  const referencia = firebase.database().ref().child(endereco);
  const objeto = {
      [chave] : valor,
  };
  referencia.update(objeto);
};
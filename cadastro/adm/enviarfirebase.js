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
    let usuarioKey = pushFirebase("usuarios",usuarioJsonStr);
    //updateFirebase("usuarios", "1",usuarioJsonStr);
    //eraseFirebase("usuarios/1");
    console.log(getFirebase("usuarios/" + usuarioKey) );
    console.log("tchau");
};

function pushFirebase(endereco,valor){
  const referencia = firebase.database().ref(endereco);
  return referencia.push(valor).key;
};

function getFirebase(endereco){
  const referencia = firebase.database().ref(endereco);
  let valor;
  
  referencia.on('value', 
  (snapshot) => {
    valor = snapshot.val();
  }
  );
  
  return valor;
};

function updateFirebase(endereco,chave,valor){
  const referencia = firebase.database().ref(endereco);
  const objeto = {[chave]:valor};
  referencia.update(objeto);
};

function eraseFirebase(endereco){
  const referencia = firebase.database().ref(endereco);
  referencia.remove();
};
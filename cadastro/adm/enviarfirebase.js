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

    pushFirebase(JSON.stringify(usuario));
    console.log("tchau");
};

function pushFirebase(texto){
 const referencia = firebase.database().ref();
 referencia.push(texto);
};
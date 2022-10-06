const app = firebase.initializeApp(firebaseConfig);

function enviarFirebase(){
    console.log("oi");
    let person = {
        titulo: "Titulo",
        nome: "João",
        instagram: "@instagram",
        fotoDePerfil: "none",
        telefone: "00000",
        temWhatsapp: "true"
    };
    pushFirebase(JSON.stringify(person));
    console.log("tchau");
};

function pushFirebase(texto){
 const referencia = firebase.database().ref();
 referencia.push(texto);
};
function criarItemLista(usuario){
    let html = 
`
<div class="card">
 <h6 class="card-header" id="nome" ></h6>
 <div class="card-body">
  <h5 id="titulo" >Titulo: </h5>
  <p id="descricao" >Descrição: </p>
  <p id="instagram" >Instagram: </p>
  <p id="telefone" >Telefone: </p>
 </div>
</div>
`;
    document.getElementById("lista").innerHTML += html;
    
    document.getElementById("titulo").innerHTML += usuario.titulo;
    document.getElementById("nome").innerHTML = usuario.nome;
    document.getElementById("descricao").innerHTML += usuario.descricao;
    document.getElementById("instagram").innerHTML += usuario.instagram;
    document.getElementById("telefone").innerHTML += usuario.telefone;
}
atualizarLista()
function atualizarLista(){
    console.log("oi");
    let usuario = {
        titulo: "Título",
        descricao: "descricao",
        nome: "Nome",
        instagram: "@instagram",
        usarFoto: null,
        telefone: "3333-3333",
        temWhatsapp: null,
    };
    criarItemLista(usuario);
    //let usuarioJsonStr = getFirebase("usuarios/1");
    //let usuario = JSON.parse(usuarioJsonStr);
    //console.log(usuario);
};
function criarItemLista(){
    let html = 
`
<div class="card">
 <h6 class="card-header" id="nome" >Nome</h6>
 <div class="card-body">
  <h5 id="titulo" >Titulo</h5>
  <p id="descricao" >Descrição</p>
  <p id="instagram" >Instagram</p>
  <p id="telefone" >Telefone</p>
 </div>
</div>
`;
    document.getElementById("lista").innerHTML += html;
}
criarItemLista();
atualizarLista()
function atualizarLista(){
    console.log("oi");
    let usuarioJsonStr = getFirebase("usuarios/1");
    let usuario = JSON.parse(usuarioJsonStr);
    console.log(usuario);
};
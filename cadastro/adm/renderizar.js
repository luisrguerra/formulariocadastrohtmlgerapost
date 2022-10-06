//renderizar html em png
function btnSalvar(){
    elemento = document.getElementById("previewBox")
    var zoom_tmp = elemento.style.zoom;
    elemento.style.zoom = "100%";
    html2canvas(elemento, {
        
        onrendered: function(canvas) {
          var dados_imagem =  canvas.toDataURL("image/png");
          
          //console.log("dados_imagem:",dados_imagem)
          //console.log(typeof dados_imagem)
          elemento.style.zoom = zoom_tmp;
          var link = document.createElement('a');
          link.href = dados_imagem;
          link.download = 'imagem.png';
          link.click();
        } 
    });      
};


function btnSalvar2(id){
  var elemento = document.getElementById("previewBox")
  const zoom_tmp = elemento.style.zoom;
  elemento.style.zoom = "100%";

  htmlToImage.toPng(elemento)
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'imagem.png';
      link.click();
      elemento.style.zoom = zoom_tmp;
    })
    .catch(function (error) {
      console.error('Erro renderizador', error);
      elemento.style.zoom = zoom_tmp;
    });

};
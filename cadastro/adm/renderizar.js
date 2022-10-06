
function btnSalvar2(id){
  var elemento = document.getElementById(id)
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
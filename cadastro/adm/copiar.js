function funcaobtn_copiar_txt(){
    var copyText = document.getElementById("texto_copiar");
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value= copyText.innerText
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);  

}
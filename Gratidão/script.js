let botao = document.querySelector("#girar");
let div = document.querySelector ("div");
let imgInvisivel = document.querySelector ("#imgInvisivel");

function girarImagens(){
    div.style.flexDirection = "row";
    imgInvisivel.style.display = "block";
}

botao.onmouseenter = girarImagens
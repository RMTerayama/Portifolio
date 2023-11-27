
divCurriculo=document.querySelector(".curriculo");
function curriculo(){
    console.log("teste");
    divCurriculo.classList.add("activeCurriculo");
    document.querySelector(".opcaoCurriculo").classList.add("activeOption");
}

document.addEventListener('click', function(event) {

    if (!divCurriculo.contains(event.target)) {
    fechaOpcao();
  }
});

function fechaOpcao() {
    divCurriculo.classList.remove("activeCurriculo");
    document.querySelector(".opcaoCurriculo").classList.remove("activeOption");

}
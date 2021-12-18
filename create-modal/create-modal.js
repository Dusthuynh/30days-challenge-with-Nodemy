window.onload = main;
var modal = document.getElementsByClassName("modal")[0];

function main(){
    var btn_start = document.getElementsByClassName("btn_modal")[0];
    var icon_close = document.getElementsByClassName("fa-times")[0];
    var btn_close = document.getElementsByClassName("btn_close")[0];

    btn_start.addEventListener("click", toggleModal);
    icon_close.addEventListener("click", toggleModal);
    btn_close.addEventListener("click", toggleModal);
}

function toggleModal(){
    modal.classList.toggle("hide");
}

modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });
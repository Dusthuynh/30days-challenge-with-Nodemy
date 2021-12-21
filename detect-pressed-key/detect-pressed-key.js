const box = document.getElementsByClassName("box")[0];
const eKey = document.querySelector(".card.key p:last-child");
const eLocation = document.querySelector(".card.location p:last-child");
const eWhich = document.querySelector(".card.which p:last-child");
const eCode = document.querySelector(".card.code p:last-child");

document.addEventListener("keydown", (e)=>{
    console.log(e);
    let keyName = e.keyCode === 32 ? "Space" :e.key;

    document.querySelector(".result").innerHTML = e.which;
    eKey.innerHTML = keyName;
    eLocation.innerHTML = e.location;
    eWhich.innerHTML = e.which;
    eCode.innerHTML = e.code;

    document.getElementsByClassName("alert")[0].classList.add("hide");
    box.classList.remove("hide");
})
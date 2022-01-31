var item = document.querySelectorAll(".item");

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
	},
}

item.forEach((item) =>{
    item.addEventListener("click",()=>{
        if(item.classList.contains("success"))
            show("success");
        else if(item.classList.contains("warning"))
            show("warning");
        else show("error");
    })
});

function show(type){
    let box = document.createElement("div");
    box.className = `toast ${type}`;
    box.innerHTML = `${toasts[type].icon}
    <span class="msg">${toasts[type].msg}</span>
    <span class="countdown"></span>`;

    var show = document.getElementById("show-notification");
    show.appendChild(box);

    setTimeout(() => {
		box.style.animation = 'hide_slide 1s ease forwards'
	}, 4000);
	setTimeout(() => {
		box.remove()
	}, 6000);
}
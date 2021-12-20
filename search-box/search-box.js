document.getElementsByClassName("search-button")[0].onclick = showSearch;
function showSearch(){
    document.getElementsByClassName("search-box")[0].classList.toggle("open");
    document.getElementsByClassName("search-input")[0].focus();
}


// document.querySelector('.search-button').addEventListener('click', function () {
// 	this.parentElement.classList.toggle('open');
// 	this.previousElementSibling.focus();
// });

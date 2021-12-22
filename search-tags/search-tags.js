window.onload = main;

var searchInput = document.querySelector('.search-input');
var tags = document.querySelector('.search-tags');
var eTags = document.querySelectorAll('.search-tags li i');

function main(){
    searchInput.onkeydown = createTag;
    document.querySelector('.btn-removeAll').onclick = removeAll;
}

function createTag(e){
    if(e.keyCode === 13 && e.target.value.length>0){
        var list = document.createElement('li');
        var text = document.createElement('span');
        var icon = document.createElement('i');

        text.innerHTML = e.target.value;
        icon.classList.add('uil');
        icon.classList.add('uil-multiply')
        list.appendChild(text);
        list.appendChild(icon);
        tags.appendChild(list);
        searchInput.value="";
        tags.appendChild(searchInput);
        searchInput.focus();

        eTags = document.querySelectorAll('.search-tags li i');
        //xu ly su kien xoa tag
        eTags.forEach((value,idx)=>{
            eTags[idx].onclick = ()=>{
                eTags[idx].parentNode.remove();
            }
        });
    }
}

function removeAll(){
    tags.innerHTML='';
    tags.appendChild(searchInput);
}
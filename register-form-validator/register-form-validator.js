const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!checkRequired([username,email, password1, password2])){
        checkLength(username, 3, 15);
        checkLength(password1, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password1, password2);
    }
})

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
} 

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

// Get fieldname
function getFieldName(input) {
    console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check required fields
function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach( (input)=>{
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
            isRequired = true;
        }else {
            showSuccess(input);
        }
    })
    return isRequired;
}

function checkLength(input, min, max){
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())) {
        showSuccess(input);
    }else {
        showError(input, 'Email is not valid');
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value != input2.value){
        showError(input2, 'Passwords do not match');
    }
}
const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("confirm-password");


const arrElement = [userName,email,password,passwordTwo];

const checkRequired = (arrElement)=>{
    arrElement.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${message(input)} is required`);
        }else{
            showsucess(input,'Sucess');
        }
    });
}

// Check Length
const checkLength = function(input, min, max){
if(input.value.trim().length < min) {
    showError(input,`${message(input)} should be atleast 5 character`);
}else if (input.value.trim().length > max) {
    showError(input, `${message(input)} should be lessthan 12 character`);
}else{
    showsucess(input,'Sucess')
}
}

// Password Match

const checkPasswordMatch = function(input1,input2){
if(input1.value.trim() !== '' && input2.value.trim() !== ''){
    if(input1.value.trim() !== input2.value.trim()){
        showError(input2,'password not match');
    }else{
        showsucess(input1,'sucess');
        showsucess(input2,'sucess');
    }
}
}

const message = function(input){
    const errorMessage = input.name.replace(/-p/,' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

// Email Validate
const checkEmail = function(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase().trim())) {
        showsucess(input,'Sucess');
    }else{
        showError(input,'Enter valid Email ID')
    }
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkRequired(arrElement);
    checkLength(userName,5,10);
    checkLength(password,5,12);
    checkLength(passwordTwo,5,12);
    checkEmail(email)
    checkPasswordMatch(password,passwordTwo);

})


// form.addEventListener('submit',(e) =>{
//     e.preventDefault();

// if (userName.value.trim() === ''){
//     showError(userName,'Enter the Username');
// }else{
//     showsucess(userName,'Sucess');
// }

// });

const showError = function(input, message) {
let formControl = input.parentElement;
formControl.classList = 'form_control error';
let small = formControl.querySelector('span');
small.innerText = message;
}

function showsucess(input, message) {
let formControl = input.parentElement;
formControl.classList = 'form_control sucess';
let small = formControl.querySelector('span');
small.innerText = message;
}
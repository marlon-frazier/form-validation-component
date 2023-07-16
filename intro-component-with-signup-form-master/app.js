let submit = document.querySelector('.free-trial')
let first = document.getElementById('first')
let last = document.getElementById('last')
let email = document.getElementById('email')
let password = document.getElementById('password')

let firstError = document.querySelectorAll('.first-error')
let lastError = document.querySelectorAll('.last-error')
let emailError = document.querySelectorAll('.email-error')
let passwordError = document.querySelectorAll('.pw-error')

submit.addEventListener('click', () =>{
    if (first.value === ''){
        first.style.borderColor = 'hsl(0, 100%, 74%)'
        for(let i = 0; i < firstError.length; i++){
            firstError[i].classList.remove('hidden')
        }
    }
    else{
        for(let i = 0; i < firstError.length; i++){
            firstError[i].classList.add('hidden')
        }
        first.style.borderColor = 'black'
    }
    if (last.value === ''){
        last.style.borderColor = 'hsl(0, 100%, 74%)'
        for(let i = 0; i < lastError.length; i++){
            lastError[i].classList.remove('hidden')
        }
    }
    else{
        for(let i = 0; i < lastError.length; i++){
            lastError[i].classList.add('hidden')
        }
        last.style.borderColor = 'black'
    }
    if (email.value === ''){
        email.style.borderColor = 'hsl(0, 100%, 74%)'
        for(let i = 0; i < emailError.length; i++){
            emailError[i].classList.remove('hidden')
        }
    }
    else{
        for(let i = 0; i < emailError.length; i++){
            emailError[i].classList.add('hidden')
        }
        email.style.borderColor = 'black'
    }
    if (password.value === ''){
        password.style.borderColor = 'hsl(0, 100%, 74%)'
        for(let i = 0; i < passwordError.length; i++){
            passwordError[i].classList.remove('hidden')
        }
    }
    else{
        for(let i = 0; i < passwordError.length; i++){
            passwordError[i].classList.add('hidden')
        }
        password.style.borderColor = 'black'
    }
})
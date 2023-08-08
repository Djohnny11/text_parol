let input=document.querySelector('input')
let eye = document.querySelector('i')

eye.addEventListener('click', function(){
    if(input.type=='text') {
        input.type='password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
    }else {
        input.type='text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }
})
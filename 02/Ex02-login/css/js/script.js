var mensagem = document.querySelector('.mensagem');
var botao = document.querySelector('.button');
botao.addEventListener('click', function(evento){
    evento.preventDefault();

    var email = document.querySelector('#newsInputEmail')
    if (email.value =="" ||email.value.length == 0) {

        mensagem.textContent = 'Digite um e-mail válido'
        return

    } else if (email.value.indexOf('@')==0 || email.value.indexOf ('@')>=email.value.length){

        mensagem.textContent = "O email informado é inválido"
        return
        
    } else {
        mensagem.textContent = 'O e-mail ' + email.value +'foi cadastrado.'
    }

    var senha = document.querySelector('loginInputPassword');
    if(senha.value == "" || senha.value.length <6 ) {

        mensagem.textContent = 'Digite uma senha com mais de 6 caracteres.'
        return 
    }
})
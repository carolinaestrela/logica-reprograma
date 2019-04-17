var mensagem = document.querySelector('.mensagem')


var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    email.value
    mensagem.textContent = 'O e-mail '  + email.value + ' foi cadastrado com sucesso'

});
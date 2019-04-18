var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click',function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
// condição que verifica se o e-mail digitado está vazio ou retorna zero
if (email.value == "" || email.value.length == 0 ){
    mensagem.textContent = 'Digite um email válido'
    return
//condição que verifica se o e-mail contém o @ 
 } else if( email.value.indexOf('@')<=-0 || email.value.indexOf('@')>=email.value.length -1){
    mensagem.textContent= ' o e-mail informado é inválido'
    return 

 }else{
     //concatena o e-mail com a informação de que o e-mail foi cadastrado
    mensagem.textContent = ' o email' + email.value + ' foi cadastrado com sucesso! '
}
    console.log( email.value.indexOf('@'))
})
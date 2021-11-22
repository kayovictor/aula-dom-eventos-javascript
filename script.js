//01
function minhaFuncao (){
    document.getElementById('boas-vindas').innerHTML = 'Olá, Seja bem vindo ao mundo JS!'
}
//02
function minha01(){
 var paragrafo =  document.getElementsByTagName('p');
 for(let i = 0; i < paragrafo.length; i++){
   paragrafo[i].innerHTML = 'Olá, Seja bem vindo ao mundo JS!';  
 }
}
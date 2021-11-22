function transfomacao(){
    var adicionar = document.getElementsByClassName('antes');
    var trans = document.getElementsByClassName('oi')
    for(let i = 0; i < adicionar.length; i++){
      var valor =  trans[i].innerHTML = adicionar[i].innerHTML;
      trans[i].style.textTransform = 'uppercase'
      adicionar[i].innerHTML = ''; 
    }
}

var selecionar =  document.getElementsByTagName('h1')[0];

selecionar.addEventListener('mouseover', () =>{
   selecionar.style.color = 'red';
});

selecionar.addEventListener('mouseout', () =>{
    selecionar.style.color = 'green';
});


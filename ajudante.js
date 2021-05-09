function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



//Calculadora------------------------------------------------------------------------------------

var operator = ''

var first = ''

var second = ''



function on_off(){

operator = ''

first = ''

second = ''

document.getElementById('result').innerHTML = ''

return operator,first, second


}


function getnumber(num){
  
    if(operator != ''){document.getElementById('result').innerHTML += (num)
    second += num
    return second
  }
    else{document.getElementById('result').innerHTML += (num)
    first += num
    return first }

}

function plus() {
  document.getElementById('result').innerHTML += ' + ' 
  first = first + second 
  second = ''
  operator = '+' 
  return operator,second,first}

function minus() {
  document.getElementById('result').innerHTML += ' - '  
  first = first + second 
  second = ''
  operator = '-' 
  return operator,second,first}

function times() {
  document.getElementById('result').innerHTML += ' X '  
  first = first + second 
  second = ''
  operator = 'X' 
  return operator,second,first}

function divide() {
  document.getElementById('result').innerHTML += ' / '  
  first = first + second 
  second = ''
  operator = '/' 
  return operator,second,first}


function equals() {
  if(operator == '+'){
    document.getElementById('result').innerHTML = (parseInt(first)) + (parseInt(second))
    first = document.getElementById('result').innerHTML
    second = ''
    return first,second   }



if(operator == '-'){
   document.getElementById('result').innerHTML = (parseInt(first)) - (parseInt(second))
   first = document.getElementById('result').innerHTML
   second = ''
   return first,second   }

if(operator == 'X'){
  document.getElementById('result').innerHTML = (parseInt(first)) * (parseInt(second))
  first = document.getElementById('result').innerHTML
  second = ''
  return first,second   }

if(operator == '/'){
  document.getElementById('result').innerHTML = (parseInt(first)) / (parseInt(second))
  first = document.getElementById('result').innerHTML
  second = ''
  return first,second   }

}

//----------------------------------------------------------------------












// Jogo da Velha -------------------------------------------------------------------------------------

var usados = []

var turno = 1

var tudo =  ['topl','topm','topr','midl','midm','midr','lowl','lowm','lowr']

var moeda = '3'

var validou = 3

var bot_rodando = 1

var topl = document.getElementById('topl').innerHTML
var topm = document.getElementById('topm').innerHTML
var topr = document.getElementById('topr').innerHTML
var midl = document.getElementById('midl').innerHTML
var midm = document.getElementById('midm').innerHTML
var midr = document.getElementById('midr').innerHTML
var lowl = document.getElementById('lowl').innerHTML
var lowm = document.getElementById('lowm').innerHTML
var lowl = document.getElementById('lowr').innerHTML

function velha_inicio(){

for(i = 0 ; i < (tudo.length ); i++){
  document.getElementById(tudo[i]).innerHTML = ''

}

moeda = Math.floor(Math.random() * 2);

if(moeda == 1){
 
document.getElementById('jogador_primeiro').style.visibility= 'visible';
document.getElementById('escolha_jogador').style.visibility= 'visible';

}


if(moeda == 0){

document.getElementById('bot_primeiro').style.visibility= 'visible';

//window.alert('os usados são ' + usados)

var jogada_bot = Math.floor(Math.random() * 9) 

usados.push(tudo[jogada_bot])

document.getElementById(tudo[jogada_bot]).innerHTML = 'O'

}

return turno

}


function ordem(n){

 if(n == 'bot'){
  var jogada_bot3 = Math.floor(Math.random() * 9) 

  usados.push(tudo[jogada_bot3])
  
  document.getElementById(tudo[jogada_bot3]).innerHTML = 'O'
      
   } 
}



function jogou(id_do_x){

  turno = 1
    
    for(u = 0; u < usados.length; u++){
      if(id_do_x == usados[u]){
        window.alert('igual')
        turno = 2
        
             }
     
    }


  if(turno == 1){

  usados.push(id_do_x)
  
  document.getElementById(id_do_x).innerHTML = 'X'

  if(topl == 'X' && topm == 'X' && topr == 'X' ){window.alert('vitoria')}
  if(midl == 'X' && midm == 'X' && midr == 'X' ){window.alert('vitoria')}
  if(lowl == 'X' && lowm == 'X' && lowr == 'X' ){window.alert('vitoria')}
  if(topl == 'X' && midl == 'X' && lowl == 'X' ){window.alert('vitoria')}
  if(topm == 'X' && midm == 'X' && lowm == 'X' ){window.alert('vitoria')}
  if(topr == 'X' && midr == 'X' && lowr == 'X' ){window.alert('vitoria')}
  if(topl == 'X' && midm == 'X' && lowr == 'X' ){window.alert('vitoria')}
  if(lowl == 'X' && midm == 'X' && topr == 'X' ){window.alert('vitoria')}

  bot_rodando = 2

  
  while(bot_rodando == 2 && usados.length != 9){
  
  validou = 1

  var jogada_bot2 = Math.floor(Math.random() * 9) 

 

  for(p = 0;p < usados.length;p++){
    
    if(tudo[jogada_bot2] == usados[p]){  validou = 2 }


  }



  if(validou != 2){

  

  usados.push(tudo[jogada_bot2])
  
  document.getElementById(tudo[jogada_bot2]).innerHTML = 'O'

  

    bot_rodando == 3

    return bot_rodando

}

  }




 

  }






}























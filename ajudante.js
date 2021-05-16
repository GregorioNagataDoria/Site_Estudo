


function openCity(evt, cityName) {
 
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

operator,first,second = ''

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

var vitoria = 1

var derrota = 1



function velha_inicio(){

  document.getElementById('igual').style.visibility = 'hidden'

usados = []

validou = 3

bot_rodando = 1

vitoria = 1

derrota = 1

document.getElementById('vitoria').style.visibility= 'hidden';
document.getElementById('derrota').style.visibility= 'hidden';
document.getElementById('empate').style.visibility= 'hidden';


for(i = 0 ; i < (tudo.length ); i++){
  document.getElementById(tudo[i]).innerHTML = ''

}

moeda = Math.floor(Math.random() * 2);

if(moeda == 1){
 
document.getElementById('jogador_primeiro').style.visibility= 'visible';
document.getElementById('escolha_jogador').style.visibility= 'visible';
document.getElementById('bot_primeiro').style.visibility= 'hidden';

}
if(moeda == 0){

document.getElementById('bot_primeiro').style.visibility= 'visible';
document.getElementById('jogador_primeiro').style.visibility= 'hidden';
document.getElementById('escolha_jogador').style.visibility= 'hidden';



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

  document.getElementById('igual').style.visibility = 'hidden'


  if(derrota != 3 ){
  
    bot_rodando = 5
  turno = 1
    
    for(u = 0; u < usados.length; u++){
      if(id_do_x == usados[u]){
        document.getElementById('igual').style.visibility = 'visible'
        turno = 2
        
             }
     
    }


  if(turno == 1){

  update()

  usados.push(id_do_x)
  
  document.getElementById(id_do_x).innerHTML = 'X'

  var topl1 = document.getElementById('topl').innerText
  var topm1 = document.getElementById('topm').innerText
  var topr1 = document.getElementById('topr').innerText
  var midl1 = document.getElementById('midl').innerText
  var midm1 = document.getElementById('midm').innerText
  var midr1 = document.getElementById('midr').innerText
  var lowl1 = document.getElementById('lowl').innerText
  var lowm1 = document.getElementById('lowm').innerText
  var lowr1 = document.getElementById('lowr').innerText

  update()



    if(usados.length == 9 && vitoria != 3 ){document.getElementById('empate').style.visibility= 'visible';}

    
      
      while(bot_rodando == 5 && usados.length != 9 && vitoria != 3 && derrota != 3){
       

    if(topl1 == 'X' && topm1 == 'X' && topr1 != 'O' && topr1 != 'X'){document.getElementById('topr').innerHTML = 'O'; bot_rodando = 3;usados.push('topr');break}
    if(midl1 == 'X' && midm1 == 'X' && midr1 != 'O' && midr1 != 'X'){document.getElementById('midr').innerHTML = 'O'; bot_rodando = 3;usados.push('midr');break}
    if(lowl1 == 'X' && lowm1 == 'X' && lowr1 != 'O' && lowr1 != 'X'){document.getElementById('lowr').innerHTML = 'O'; bot_rodando = 3;usados.push('lowr');break}
  
    if(topr1 == 'X' && topm1 == 'X' && topl1 != 'O' && topl1 != 'X'){document.getElementById('topl').innerHTML = 'O'; bot_rodando = 3;usados.push('topl');break}
    if(midr1 == 'X' && midm1 == 'X' && midl1!= 'O' && midl1 != 'X'){document.getElementById('midl').innerHTML = 'O'; bot_rodando = 3;usados.push('midl');break}
    if(lowr1 == 'X' && lowm1 == 'X' && lowl1!= 'O' && lowl1 != 'X'){document.getElementById('lowl').innerHTML = 'O'; bot_rodando = 3;usados.push('lowl');break}
  
    if(topl1 == 'X' && midl1 == 'X' && lowl1 != 'O' && lowl1 != 'X'){document.getElementById('lowl').innerHTML = 'O'; bot_rodando = 3;usados.push('lowl');break}
    if(topm1 == 'X' && midm1 == 'X' && lowm1 != 'O' && lowm1 != 'X'){document.getElementById('lowm').innerHTML = 'O'; bot_rodando = 3;usados.push('lowm');break}
    if(topr1 == 'X' && midr1 == 'X' && lowr1 != 'O' && lowr1 != 'X'){document.getElementById('lowr').innerHTML = 'O'; bot_rodando = 3;usados.push('lowr');break}
  
    if(midl1 == 'X' && lowl1 == 'X' && topl1 != 'O' && topl1 != 'X'){document.getElementById('topl').innerHTML = 'O'; bot_rodando = 3;usados.push('topl');break}
    if(midm1 == 'X' && lowm1 == 'X' && topm1 != 'O' && topm1 != 'X'){document.getElementById('topm').innerHTML = 'O'; bot_rodando = 3;usados.push('topm');break}
    if(midr1 == 'X' && lowr1 == 'X' && topr1 != 'O' && topr1 != 'X'){document.getElementById('topr').innerHTML = 'O'; bot_rodando = 3;usados.push('topr');break}
  
    if(midm1 == 'X' && lowl1 == 'X' && topr1 != 'O' && topr1 != 'X'){document.getElementById('topr').innerHTML = 'O'; bot_rodando = 3;usados.push('topr');break}
    if(midm1 == 'X' && topr1 == 'X' && lowl1 != 'O' && lowl1 != 'X'){document.getElementById('lowl').innerHTML= 'O'; bot_rodando = 3;usados.push('lowl');break}
    if(midm1 == 'X' && lowr1 == 'X' && topl1 != 'O' && topl1 != 'X'){document.getElementById('topl').innerHTML = 'O'; bot_rodando = 3;usados.push('topl');break}
    if(midm1 == 'X' && topl1 == 'X' && lowr1 != 'O' && lowr1 != 'X'){document.getElementById('lowr').innerHTML = 'O'; bot_rodando = 3;usados.push('lowr');break}

    update()

    
    if(usados.length == 9 && vitoria != 3 && derrota != 3){document.getElementById('empate').style.visibility= 'visible';}

      


    bot_rodando = 2 

      }

      update()


    if(usados.length == 9 && vitoria != 3 && derrota != 3){document.getElementById('empate').style.visibility= 'visible';}
    



  while(bot_rodando == 2 && usados.length != 9 && vitoria != 3){
  
    




  validou = 1

  var jogada_bot2 = Math.floor(Math.random() * 9) 

 

  for(p = 0;p < usados.length;p++){
    
    if(tudo[jogada_bot2] == usados[p]){  validou = 2 }


  }



  if(validou != 2){
  update()

  usados.push(tudo[jogada_bot2])
  
  document.getElementById(tudo[jogada_bot2]).innerHTML = 'O'

  update()

  if(usados.length == 9 && derrota != 3 ){document.getElementById('empate').style.visibility= 'visible';}

    bot_rodando == 3

    return bot_rodando

}

  }




 

  }




  }

}




function update(){

var topl = document.getElementById('topl').innerText
var topm = document.getElementById('topm').innerText
var topr = document.getElementById('topr').innerText
var midl = document.getElementById('midl').innerText
var midm = document.getElementById('midm').innerText
var midr = document.getElementById('midr').innerText
var lowl = document.getElementById('lowl').innerText
var lowm = document.getElementById('lowm').innerText
var lowr = document.getElementById('lowr').innerText

if(topl == 'X' && topm == 'X' && topr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(midl == 'X' && midm == 'X' && midr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(lowl == 'X' && lowm == 'X' && lowr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(topl == 'X' && midl == 'X' && lowl == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(topm == 'X' && midm == 'X' && lowm == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(topr == 'X' && midr == 'X' && lowr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(topl == 'X' && midm == 'X' && lowr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}
if(lowl == 'X' && midm == 'X' && topr == 'X' ){document.getElementById('vitoria').style.visibility= 'visible'; vitoria = 3}

if(topl == 'O' && topm == 'O' && topr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(midl == 'O' && midm == 'O' && midr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(lowl == 'O' && lowm == 'O' && lowr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(topl == 'O' && midl == 'O' && lowl == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(topm == 'O' && midm == 'O' && lowm == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(topr == 'O' && midr == 'O' && lowr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(topl == 'O' && midm == 'O' && lowr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}
if(lowl == 'O' && midm == 'O' && topr == 'O' ){document.getElementById('derrota').style.visibility= 'visible'; derrota = 3}

return vitoria,derrota


}


// Jogo da Forca ---------------------------------------------------------------------------------------------------------

letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function letra(event) {
    var letra_code = event.which || event.keyCode;
    document.getElementById("l").innerHTML = "The Unicode value is: " + letra_code;
    console.log(letras[letra_code - 97] + 'ola')
  }












//  <input type="text" size="40" onkeypress="letra(event)">
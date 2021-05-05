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

var tudo =  ['topl','topm','topr','midl','midm','midr','lowl','lowm','lowr']

var moeda = '3'

var primeiro = ''

function velha_inicio(){

  

for(i = 0 ; i < (tudo.length ); i++){
  document.getElementById(tudo[i]).innerHTML = ''

}







moeda = Math.floor(Math.random() * 2);

if(moeda == 1){
  //window.alert('é 1 ') 
document.getElementById('jogador_primeiro').style.visibility= 'visible';
document.getElementById('escolha_jogador').style.visibility= 'visible';
}


if(moeda == 0){
  //window.alert('é 0 ')
document.getElementById('bot_primeiro').style.visibility= 'visible';
primeiro = 'bot'
return primeiro
}
return moeda

}


function ordem(n){

 if(n == 'bot'){primeiro = 'bot'} 
 else{primeiro = 'jogador'}

}

if(primeiro = 'bot'){

var jogada_bot = Math.floor(Math.random() * 9) 

usados.push(tudo[jogada_bot])

//window.alert('os usados são ' + usados)



}











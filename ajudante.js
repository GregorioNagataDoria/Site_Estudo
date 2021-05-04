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




//}
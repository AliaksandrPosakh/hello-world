
var a;
var b;
var operator;

function insertValue () {
    a = +prompt ('введи число а', '');
    b = +prompt ('введи число b', '');
    operator = prompt ('введи операцию', '');
}

function calculator (a, b, operator) {
    
    switch (operator) {
     case '+' :
        return a + b;
         break;

      case '-' :
        return a - b;
        break;

      case '/' :
        return a / b;
        break;
    
      case '*' :
        return a * b;
        break;

      default:
      alert ('неизвестная команда');
    }
}
function output(){
    return calculator(a, b, operator);
}
insertValue();
output();
var a=+prompt('введи число а','');
var b=+prompt('введи число b','');
var n=prompt('введи операцию','');

function calculator(a,b,operator){
    if (operator=='+'){
        alert(a+b);
    }
    else if(operator=='-'){
        alert(a-b);
    }
    else if(operator=='/'){
        alert(a/b);
    }
    else if(operator=='*'){
        alert(a*b);
    }
    else{
        alert('undefined command');
    }
}
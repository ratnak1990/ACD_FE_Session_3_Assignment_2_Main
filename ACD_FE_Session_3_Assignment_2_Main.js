var x=10;
var y=20;
var add=function(a,b){
    var result;
    function addition(a,b){
        result=a+b;
        alert("Addition result = " + result) ;
    }
    addition(x,y);
     
}
var subtract=function(a,b){
    var result;
    function subtraction(a,b){
        result=a-b;
        alert("Subtraction result = " + result) ;
    }
    subtraction(x,y);
     
}
var multiply=function(a,b){
    var result;
    function multiplication(a,b){
        result=a*b;
        alert("Multiplication result = " + result) ;
    }
    multiplication(x,y);
     
}
var divide=function(a,b){
    var result;
    function division(a,b){
        result=a/b;
        alert("Division result = " + result) ;
    }
    division(x,y);
     
}
add(x,y);
subtract(x,y);
multiply(x,y);
divide(x,y);
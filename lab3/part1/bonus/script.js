num1=Number(prompt("enter number 1 "));
var result=num1;
do{
    operation = prompt("enter an operation (+ , - , * , / , % )");
    num2 = Number(prompt("enter 2nd number"));
    switch (operation) {
        case "+":
          result += num2;
          alert( " = " + result);
          break;
        case "-":
          result -= num2;
          alert( " = " + result);
          break;
        case "*":
          result *= num2;
          alert( " = " + result);
          break;
        case "/":
          result /= num2;
          alert(" = " + result);
          break;
        case "%":
          result %= num2;
          alert( " = " + result);
          break;
        default:
          alert("enter valid operator");

    }


    cnfrm=confirm("more operation?");
}while(cnfrm)
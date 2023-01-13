num1 = Number(prompt("enter 1st number"));
operation = prompt("enter an operation (+ , - , * , / , % )");
num2 = Number(prompt("enter 2nd number"));

let result;
// do{
// }while((operation!="+"||operation!="-"||operation!="*"||operation!="/"||operation!="%")&&(operation!=null||operation!=""))
switch (operation) {
  case "+":
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
    break;
  case "-":
    result = num1 - num2;
    alert(num1 + " - " + num2 + " = " + result);
    break;
  case "*":
    result = num1 * num2;
    alert(num1 + " * " + num2 + " = " + result);
    break;
  case "/":
    result = num1 / num2;
    alert(num1 + " / " + num2 + " = " + result);
    break;
  case "%":
    result = num1 % num2;
    alert(num1 + " % " + num2 + " = " + result);
    break;
  default:
    alert("enter valid operator");
    window.location.reload();
}
window.location.reload();

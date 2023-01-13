alert("this is the first release of a calculator that only has a summation feature")
num1=Number(prompt("enter 1st number"));
num2=Number(prompt("enter 2nd number"));

if(num1!=NaN&&num2!=NaN)
{
    document.write(num1+num2)
}
else{
    document.write("please enter numbers only")
}
